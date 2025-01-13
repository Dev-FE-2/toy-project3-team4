import * as S from './UserCard.styles';
/**
 * 검색 페이지의 사용자 목록 렌더링을 위한 카드 컴포넌트
 * @returns
 */
const UserCard = () => {
  return (
    <S.CardContainer to={{}}>
      <S.CardImage src="src/assets/avatar.svg" />
      <S.CardWrapper>
        <S.CardTitle>이민태</S.CardTitle>
        <S.CardInfoBox>
          <S.CardStack>
            <S.B>1천</S.B>
            <span>플리</span>
          </S.CardStack>
          <S.CardStack>
            <S.B>100</S.B>
            <span>팔로워</span>
          </S.CardStack>
          <S.CardStack>
            <S.B>1만</S.B>
            <span>팔로잉</span>
          </S.CardStack>
        </S.CardInfoBox>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

export default UserCard;
