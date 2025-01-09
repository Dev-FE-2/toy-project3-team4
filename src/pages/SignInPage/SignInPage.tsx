import * as S from './SignInPage.styles';
import { GoogleLoginButton, Logo } from '@/components';

const SignInPage = () => {
  return (
    <S.Main>
      <S.Container>
        <Logo width="400px" />

        <div>
          <S.Title>반려동물의 시작, 펫모먼트</S.Title>
          <S.Subtitle>100만명이 함께하고 있어요</S.Subtitle>
          <S.Description>반려동물 정보를 위해 로그인이 필요해요</S.Description>
        </div>

        <GoogleLoginButton />
      </S.Container>
    </S.Main>
  );
};

export default SignInPage;
