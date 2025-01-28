import ReactPlayer from 'react-player';
import { Video } from '@/types';
import * as S from './VideoPlayer.styles';

interface VideoPlayerProps {
  video: Video;
  isFirstVideo: boolean;
  thumbnailUrl?: string;
  onVideoEnd?: () => void;
}

const VideoPlayer = ({
  video,
  isFirstVideo,
  thumbnailUrl,
  onVideoEnd,
}: VideoPlayerProps) => {
  return (
    <S.VideoPlayerBox>
      <ReactPlayer
        url={video.url}
        muted
        controls
        playing
        onEnded={onVideoEnd}
        width={'100%'}
        height={'100%'}
        style={{ position: 'relative', zIndex: 1 }}
      />
      {isFirstVideo && thumbnailUrl && (
        <S.VideoThumbnail src={thumbnailUrl} alt="Video thumbnail" />
      )}
    </S.VideoPlayerBox>
  );
};

export default VideoPlayer;
