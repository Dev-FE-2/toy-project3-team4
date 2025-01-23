import * as S from './ProfileCard.styles';
import defaultImage from '@/assets/avatar.svg';
import { IUserAPISchema } from '@/types';

interface IProfileCard {
  profile: IUserAPISchema;
}

/**
 * 프로필 페이지의 사용자 정보 렌더링을 위한 카드 컴포넌트
 * @returns
 */
const ProfileCard = ({ profile }: IProfileCard) => {
  return (
    <S.CardContainer>
      <S.CardImage imgUrl={profile.imgUrl || defaultImage} size="10rem" />
      <S.CardTitle>{profile.name}</S.CardTitle>
      <S.CardInfoBox>
        <S.CardStack>
          <S.B>{profile.myPlaylists.length}</S.B>
          <span>플리</span>
        </S.CardStack>
        <S.CardStack>
          <S.B>{profile.likes.length}</S.B>
          <span>좋아요</span>
        </S.CardStack>
      </S.CardInfoBox>
      <p>{profile.description}</p>
    </S.CardContainer>
  );
};

export default ProfileCard;
