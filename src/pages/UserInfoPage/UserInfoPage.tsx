import { RoundImage } from '@/components';
import defaultImage from '@/assets/avatar.svg';
import { useUserImg } from '@/store';
import * as S from './UserInfoPage.styles';

const UserInfoPage = () => {
  const userPhoto = useUserImg() || defaultImage;

  return (
    <S.InfoContainer>
      <S.Title>프로필 편집</S.Title>
      <RoundImage size="12rem" imgUrl={userPhoto} />
      <S.SubTitle>닉네임</S.SubTitle>
      <S.InputText type="text" placeholder="닉네임을 입력해주세요" />
      <S.SubTitle>소개</S.SubTitle>
      <S.TextArea placeholder="자기소개를 입력해주세요" />
      <S.UpdateButton
        $bgColor="primary"
        $width="100%"
        type="submit"
        $radius="default"
      >
        수정하기
      </S.UpdateButton>
    </S.InfoContainer>
  );
};

export default UserInfoPage;
