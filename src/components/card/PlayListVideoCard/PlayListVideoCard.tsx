import { useVideoEdit } from '@/hooks';
import type { Video } from '@/types';
import { RiDraggable, RiCloseLine } from 'react-icons/ri';
import * as S from './PlayListVideoCard.styles';

interface IPlayListVideoCard {
  data: Video;
  isEditable?: boolean;
}

const PlayListVideoCard = ({
  data,
  isEditable = false,
}: IPlayListVideoCard) => {
  const { removeVideo } = useVideoEdit();

  return (
    <S.VideoItem>
      {isEditable && (
        <S.MoveButton>
          <RiDraggable size="1.6rem" />
        </S.MoveButton>
      )}

      <S.ThumbnailBox>
        <img src={data.thumbnail} alt="thumbnail" />
        <span>{data.duration}</span>
      </S.ThumbnailBox>
      <S.VideoInfoBox>
        <p>{data.title}</p>
        <p>{data.url}</p>
      </S.VideoInfoBox>
      {isEditable && (
        <S.DeleteVideoButton
          type="button"
          onClick={() => removeVideo(data.url)}
        >
          <RiCloseLine size="1.6rem" />
        </S.DeleteVideoButton>
      )}
    </S.VideoItem>
  );
};

export default PlayListVideoCard;
