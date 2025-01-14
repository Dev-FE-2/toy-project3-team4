import { useAuth } from '@/hooks';
import * as S from './GoogleLoginButton.styles';
import GoogleIcon from '@/assets/google.svg';

const GoogleLoginButton = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <S.GoogleButton
      onClick={loginWithGoogle}
      $width="100%"
      $size="lg"
      $bgColor="secondary"
      $radius="default"
    >
      <img src={GoogleIcon} alt="구글 아이콘" />
      Google로 3초 로그인
    </S.GoogleButton>
  );
};

export default GoogleLoginButton;
