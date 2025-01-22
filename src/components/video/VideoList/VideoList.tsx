import { PlayListVideoCard } from '@/components';
import type { Video } from '@/types';
import * as S from './VideoList.styles';

const VideoList = ({
  videos,
  children,
  onClickItem,
  onRemoveVideo,
}: {
  videos: Video[];
  children?: React.ReactNode;
  onClickItem?: (idx: number) => void;
  onRemoveVideo?: (url: string) => void;
}) => {
  return (
    <S.VideoList>
      {videos.length > 0
        ? videos.map((video, idx) => {
            const onClickVideoCard = onClickItem
              ? () => onClickItem(idx)
              : undefined;
            return (
              <PlayListVideoCard
                key={video.url}
                data={video}
                onClickItem={onClickVideoCard}
                onRemoveVideo={onRemoveVideo}
              />
            );
          })
        : children}
    </S.VideoList>
  );
};

export default VideoList;
