import { Button, TagList } from '@/components';
import { RiMore2Fill } from 'react-icons/ri';
import * as S from './ExplorePlayListCard.styles';

const ExplorePlayListCard = () => {
  return (
    <S.CardContainer>
      <S.CardImageBox>
        <S.CardImage src="src/assets/testThumbnail.png" />
      </S.CardImageBox>
      <S.CardInfoBox>
        <h3>고양이는 너무 귀여웡</h3>
        <div>
          <TagList tags={['고양', '고영', '냐옹이']} tagType="text" />
        </div>
        <S.CardInfoLine>
          <span>댓글 1천· 좋아요 1만</span>
          <Button $bgColor="white" $size="xs">
            <RiMore2Fill />
          </Button>
        </S.CardInfoLine>
      </S.CardInfoBox>
    </S.CardContainer>
  );
};

export default ExplorePlayListCard;
