import { Button } from '@/components';
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
        <S.CardTagBox>
          <span>#고양</span>
          <span>#고영</span>
          <span>#냐옹이</span>
        </S.CardTagBox>
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
