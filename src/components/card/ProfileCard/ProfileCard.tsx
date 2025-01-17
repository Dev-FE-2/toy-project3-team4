import { useUser } from '@/store';
import * as S from './ProfileCard.styles';
import { useQuery } from '@tanstack/react-query';
import defaultImage from '@/assets/avatar.svg';
import { getUser } from '@/api';

/**
 * 프로필 페이지의 사용자 정보 렌더링을 위한 카드 컴포넌트
 * @returns
 */
const ProfileCard = () => {
  const user = useUser();

  const { data } = useQuery({
    queryKey: ['getUser'],
    queryFn: () => getUser(user?.userSn || ''),
    enabled: !!user?.userSn,
  });

  return (
    <S.CardContainer>
      <S.CardImage imgUrl={user?.imgUrl || defaultImage} size="10rem" />
      <S.CardTitle>이민태</S.CardTitle>
      <S.CardInfoBox>
        <S.CardStack>
          <S.B>{data?.myPlaylists.length}</S.B>
          <span>플리</span>
        </S.CardStack>
        <S.CardStack>
          <S.B>{data?.likes.length}</S.B>
          <span>좋아요</span>
        </S.CardStack>
      </S.CardInfoBox>
      <p>{data?.description}</p>
    </S.CardContainer>
  );
};

export default ProfileCard;
