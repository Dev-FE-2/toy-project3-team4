import type { Video } from '@/types';
import { RiCloseLine } from 'react-icons/ri';
import * as S from './PlayListVideoCard.styles';

interface IPlayListVideoCard {
  data: Video;
  onClickItem?: () => void;
  onRemoveVideo?: (url: string) => void;
}

const PlayListVideoCard = ({
  data,
  onClickItem,
  onRemoveVideo,
}: IPlayListVideoCard) => {
  return (
    <S.VideoItem onClick={onClickItem}>
      {/* 추후 D&D 기능 구현 필요 */}
      {/* <S.MoveButton>
          <RiDraggable size="1.6rem" />
        </S.MoveButton> */}

      <S.ThumbnailBox>
        <img src={data.thumbnail} alt="thumbnail" />
        <span>{data.duration}</span>
      </S.ThumbnailBox>
      <S.VideoInfoBox>
        <p>{data.title}</p>
        <p>{data.url}</p>
      </S.VideoInfoBox>
      {onRemoveVideo && (
        <S.DeleteVideoButton
          type="button"
          onClick={() => onRemoveVideo(data.url)}
        >
          <RiCloseLine size="1.6rem" />
        </S.DeleteVideoButton>
      )}
    </S.VideoItem>
  );
};

export default PlayListVideoCard;
