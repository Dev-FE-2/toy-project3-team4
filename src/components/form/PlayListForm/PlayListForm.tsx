import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserSn } from '@/store';
import { fetchVimeoInfo, fetchYouTubeInfo } from '@/api';
import {
  useFetchPlaylist,
  usePostPlaylist,
  useTagEdit,
  useUpdatePlaylist,
  useVideoEdit,
} from '@/hooks';
import {
  EditTagSection,
  EditVideoSection,
  FormItem,
  LoaderWrapper,
  PageTitle,
  Switch,
} from '@/components';
import { PLAYLIST_LIMITS, URL } from '@/constant';
import type { PlaylistFormData, Video } from '@/types';
import { FormItemSet, Label } from '../FormItem/FormItem.styles';
import * as S from './PlayListForm.styles';

type UpsertMode = 'insert' | 'update';

const PlayListForm = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pageMode: UpsertMode =
    pathname === URL.INSERTPLI.link ? 'insert' : 'update';

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm<PlaylistFormData>({
    defaultValues: {
      title: '',
      content: '',
      disclosure: false,
    },
  });

  const userSn = useUserSn() as string;
  const { mutate: insert, isPending: isInserting } = usePostPlaylist();
  const { mutate: update, isPending: isUpdating } = useUpdatePlaylist();

  const {
    videos,
    setVideos,
    thumbnailUrl,
    validate: validateVideo,
  } = useVideoEdit();
  const { tags, setTags, validate: validateTag } = useTagEdit();

  // 플레이리스트 불러오기
  const playlistSn = pageMode === 'update' ? pathname.split('/').pop() : null; // URL에서 ID 추출
  const { data: playlistData } = useFetchPlaylist(playlistSn as string);

  // 수정 모드 시 기존 데이터 바인딩
  useEffect(() => {
    if (playlistData && pageMode === 'update') {
      if (userSn !== playlistData.userSn) {
        alert('본인이 만든 플레이리스트만 수정할 수 있습니다.');
        navigate(-1);
        return;
      }

      setValue('title', playlistData.title);
      setValue('content', playlistData.content);
      setValue('disclosure', playlistData.disclosure);
      setTags(playlistData.hashTags);

      // 기존 영상 데이터 로드 및 비디오 정보 추가
      Promise.all(
        playlistData.links.map(async (url) => {
          if (url.includes('youtube.com') || url.includes('youtu.be')) {
            return fetchYouTubeInfo(url);
          } else if (url.includes('vimeo.com')) {
            return fetchVimeoInfo(url);
          }
          return null;
        }),
      ).then((videoData) => {
        const validVideos = videoData.filter(
          (video): video is Video => video !== null,
        );
        setVideos(validVideos);
      });
    }
  }, [playlistData, pageMode, setValue, setVideos, setTags]);

  // 플레이리스트 저장
  const onSubmit = async (data: PlaylistFormData) => {
    // 비디오, 태그는 별도로 유효성 검사
    if (!(validateVideo() && validateTag())) return;

    const submitData = {
      title: data.title,
      content: data.content,
      date: new Date().toISOString(),
      disclosure: data.disclosure,
      hashTags: tags,
      thumbnailUrl: thumbnailUrl,
      links: videos.map((video) => video.url),
    };

    if (pageMode === 'insert') {
      // 플레이리스트 생성
      const insertData = {
        ...submitData,
        playlistSn: crypto.randomUUID(),
        userSn: userSn,

        likes: [],
        comments: [],
      };

      insert(insertData, {
        onSuccess: () => {
          alert('플레이리스트가 생성되었습니다.');

          reset();
          setVideos([]);
          setTags([]);
        },
      });
    } else {
      // 플레이리스트 수정
      update(
        { playlistSn: playlistSn as string, updates: submitData },
        {
          onSuccess: () => {
            alert('플레이리스트가 수정되었습니다.');
          },
        },
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoaderWrapper isLoading={isInserting || isUpdating} />
      <S.Section>
        <PageTitle>
          플레이리스트 {pageMode === 'insert' ? '생성' : '수정'}
        </PageTitle>

        <FormItem
          id="title"
          label="플레이리스트 제목"
          placeholder="플레이리스트의 제목을 입력해주세요"
          maxLength={PLAYLIST_LIMITS.MAX_TITLE_LENGTH}
          error={errors.title?.message}
          register={register('title', {
            required: '플레이리스트의 제목을 입력해주세요',
            maxLength: {
              value: PLAYLIST_LIMITS.MAX_TITLE_LENGTH,
              message: `제목은 ${PLAYLIST_LIMITS.MAX_TITLE_LENGTH}자 이내로 입력해주세요`,
            },
          })}
        />

        <FormItem
          id="content"
          itemType="textarea"
          label="플레이리스트 설명"
          placeholder="플레이리스트의 설명을 입력해주세요"
          maxLength={PLAYLIST_LIMITS.MAX_CONTENT_LENGTH}
          error={errors.content?.message}
          register={register('content', {
            required: '플레이리스트의 설명을 입력해주세요',
            maxLength: {
              value: PLAYLIST_LIMITS.MAX_CONTENT_LENGTH,
              message: `설명은 ${PLAYLIST_LIMITS.MAX_CONTENT_LENGTH}자 이내로 입력해주세요`,
            },
          })}
        />

        {/* 영상 URL 입력 */}
        <EditVideoSection />

        {/* 태그 입력 */}
        <EditTagSection />

        <FormItemSet>
          <Label>공개 여부</Label>
          <Switch
            id="disclosure"
            checked={watch('disclosure')}
            onChange={(e) => setValue('disclosure', e.target.checked)}
            $bgColor="primary"
            $radius="round"
          />
        </FormItemSet>
      </S.Section>

      <S.Footer>
        <S.SaveButton
          type="submit"
          $bgColor="primary"
          $size="md"
          $width="100%"
          $radius="default"
          disabled={isInserting || isUpdating}
        >
          플레이리스트 {pageMode === 'insert' ? '생성' : '수정'}
        </S.SaveButton>
      </S.Footer>
    </form>
  );
};

export default PlayListForm;
