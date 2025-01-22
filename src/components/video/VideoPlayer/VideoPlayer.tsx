import { Video } from '@/types';
import * as S from './VideoPlayer.styles';

interface VideoPlayerProps {
  video: Video;
  isFirstVideo: boolean;
  thumbnailUrl?: string;
}

const VideoPlayer = ({
  video,
  isFirstVideo,
  thumbnailUrl,
}: VideoPlayerProps) => {
  const getEmbedUrl = (video: Video) => {
    if (video.platform === 'youtube') {
      return `https://www.youtube.com/embed/${video.videoId}`;
    }
    return `https://player.vimeo.com/video/${video.videoId}`;
  };

  return (
    <S.VideoPlayerBox>
      <S.VideoFrame
        src={getEmbedUrl(video)}
        title={video.title}
        aria-label={`${video.title} 비디오 플레이어`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      {isFirstVideo && thumbnailUrl && (
        <S.VideoThumbnail src={thumbnailUrl} alt="Video thumbnail" />
      )}
    </S.VideoPlayerBox>
  );
};

export default VideoPlayer;
