import { IUserAPISchema } from '@/types';
import * as S from './UserCard.styles';

interface IUserProps {
  data: IUserAPISchema;
}

/**
 * 검색 페이지의 사용자 목록 렌더링을 위한 카드 컴포넌트
 * @returns
 */
const UserCard = ({ data }: IUserProps) => {
  const { imgUrl, name, myPlaylists, userSn, likes } = data;
  return (
    <S.CardContainer to={`/profile/${userSn}`}>
      <S.CardImage src={imgUrl || 'src/assets/avatar.svg'} />
      <S.CardWrapper>
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardInfoBox>
          <S.CardStack>
            <S.B>{myPlaylists.length}</S.B>
            <span>플레이리스트</span>
          </S.CardStack>
          <S.CardStack>
            <S.B>{likes.length}</S.B>
            <span>좋아요</span>
          </S.CardStack>
        </S.CardInfoBox>
      </S.CardWrapper>
    </S.CardContainer>
  );
};

export default UserCard;
