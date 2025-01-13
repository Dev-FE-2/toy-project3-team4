import * as S from './SignInPage.styles';
import { GoogleLoginButton, Logo } from '@/components';

const SignInPage = () => {
  return (
    <S.Main>
      <S.Container>
        <Logo width="400px" />

        <div>
          <S.Title>반려동물과의 특별한 순간, 펫모먼트</S.Title>
          <S.Subtitle>1,000만 반려인과 함께하세요</S.Subtitle>
          <S.Description>
            펫모먼트의 모든 기능을 이용하려면 로그인이 필요해요
          </S.Description>
        </div>

        <GoogleLoginButton />
      </S.Container>
    </S.Main>
  );
};

export default SignInPage;
