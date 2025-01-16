import { RiAddCircleLine } from 'react-icons/ri';
import { useVideoEdit } from '@/hooks';
import { Input, PlayListVideoCard } from '@/components';
import {
  AddButton,
  ErrorMessage,
  FormItemSet,
  InputBtnGroup,
  Label,
} from '../FormItem/FormItem.styles';
import * as S from './EditVideoSection.styles';

const VideoSection = () => {
  const {
    videoUrl,
    setVideoUrl,
    videoUrlError,
    videos,
    isLoadingVideo,
    addVideo,
    videoValidError,
  } = useVideoEdit();

  return (
    <FormItemSet>
      <Label htmlFor="video">영상 URL</Label>
      <InputBtnGroup>
        <Input
          id="video"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Youtube 또는 Vimeo URL을 입력하세요"
          disabled={isLoadingVideo}
          $isBorder={true}
        />
        <AddButton
          type="button"
          $bgColor="primary"
          $size="md"
          $width="5rem"
          $radius="default"
          onClick={addVideo}
          disabled={isLoadingVideo}
        >
          {isLoadingVideo ? '로딩중...' : '추가'}
        </AddButton>
      </InputBtnGroup>
      {videoUrlError && <ErrorMessage>{videoUrlError}</ErrorMessage>}
      {videoValidError && <ErrorMessage>{videoValidError}</ErrorMessage>}

      <S.VideoList>
        {videos.length > 0 ? (
          videos.map((video) => (
            <PlayListVideoCard key={video.url} data={video} isEditable={true} />
          ))
        ) : (
          <S.VideoNoData>
            <RiAddCircleLine size={40} />
            <p>영상을 추가해주세요.</p>
          </S.VideoNoData>
        )}
      </S.VideoList>
    </FormItemSet>
  );
};

export default VideoSection;
