import * as S from './ProfileCard.styles';

/**
 * 프로필 페이지의 사용자 정보 렌더링을 위한 카드 컴포넌트
 * @returns
 */
const ProfileCard = () => {
  return (
    <S.CardContainer>
      <S.CardImage src="src/assets/avatar.svg" />
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
      <p>
        askdjas sakljdaslkd jaskl jaosi djqwio jqiw jdmaosik mqw nifo
        qfasiojdqiwojmsoi jasoi jda siojdqwiop jqwp idjq iojq odddd
      </p>
    </S.CardContainer>
  );
};

export default ProfileCard;
