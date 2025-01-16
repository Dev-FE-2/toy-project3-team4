import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useUserSn } from '@/store';
import { usePostPlaylist, useTagEdit, useVideoEdit } from '@/hooks';
import {
  EditTagSection,
  EditVideoSection,
  FormItem,
  LoaderWrapper,
  PageTitle,
  Switch,
} from '@/components';
import { PLAYLIST_LIMITS, URL } from '@/constant';
import type { PlaylistFormData } from '@/types';
import { FormItemSet, Label } from '../FormItem/FormItem.styles';
import * as S from './PlayListForm.styles';

type UpsertMode = 'insert' | 'update';

const PlayListForm = () => {
  const { pathname } = useLocation();
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
  const { mutate, isPending } = usePostPlaylist();

  const {
    videos,
    setVideos,
    thumbnailUrl,
    validate: validateVideo,
  } = useVideoEdit();
  const { tags, setTags, validate: validateTag } = useTagEdit();

  // 플레이리스트 저장
  const onSubmit = async (data: PlaylistFormData) => {
    // 비디오, 태그는 별도로 유효성 검사
    if (!(validateVideo() && validateTag())) return;

    try {
      const submitData = {
        playlistSn: crypto.randomUUID(),
        userSn: userSn,
        title: data.title,
        content: data.content,
        likes: [],
        comments: [],
        date: new Date().toISOString(),
        disclosure: data.disclosure,
        hashTags: tags,
        thumbnailUrl: thumbnailUrl,
        links: videos.map((video) => video.url),
      };

      mutate(submitData, {
        onSuccess: () => {
          const isInsertMode = pageMode === 'insert';
          alert(`플레이리스트가 ${isInsertMode ? '생성' : '수정'}되었습니다.`);

          // 등록 후 필드 초기화
          if (isInsertMode) {
            reset();
            setVideos([]);
            setTags([]);
          }
        },
      });
    } catch (error) {
      console.error('저장 실패:', error);
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoaderWrapper isLoading={isPending} />
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
          disabled={isPending}
        >
          플레이리스트 {pageMode === 'insert' ? '생성' : '수정'}
        </S.SaveButton>
      </S.Footer>
    </form>
  );
};

export default PlayListForm;
