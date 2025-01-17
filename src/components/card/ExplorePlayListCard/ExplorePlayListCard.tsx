import { Button, TagList } from '@/components';
import { RiMore2Fill } from 'react-icons/ri';
import * as S from './ExplorePlayListCard.styles';
import { IPlaylistAPISchema } from '@/types';

interface IExplorePlayListCard {
  data: IPlaylistAPISchema;
}

const ExplorePlayListCard = ({ data }: IExplorePlayListCard) => {
  const { title, hashTags, comments, likes } = data;
  return (
    <S.CardContainer>
      <S.CardImageBox>
        <S.CardImage src="src/assets/testThumbnail.png" />
      </S.CardImageBox>
      <S.CardInfoBox>
        <h3>{title}</h3>
        <div>
          <TagList tags={hashTags} tagType="text" gap={2} />
        </div>
        <S.CardInfoLine>
          <span>
            댓글 {comments.length}· 좋아요 {likes.length}
          </span>
          <Button $bgColor="white" $size="xs">
            <RiMore2Fill />
          </Button>
        </S.CardInfoLine>
      </S.CardInfoBox>
    </S.CardContainer>
  );
};

export default ExplorePlayListCard;
