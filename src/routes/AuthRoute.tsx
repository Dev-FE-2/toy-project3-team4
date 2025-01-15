import { Navigate, Outlet } from 'react-router-dom';
import { useUserSn } from '@/store';
import { URL } from '@/constant';

type AuthMode = 'authenticated' | 'guest';

interface IAuthRouteProps {
  mode: AuthMode;
  redirectPath?: string;
}

const AuthRoute = ({ mode, redirectPath }: IAuthRouteProps) => {
  const userSn = useUserSn(); // 사용자 인증 정보

  // 모드에 따라 동작 분기
  if (mode === 'authenticated' && !userSn) {
    // 인증된 경로: 비로그인 상태면 리다이렉트
    return <Navigate to={redirectPath || URL.SIGNIN.link} replace />;
  }

  if (mode === 'guest' && userSn) {
    // 게스트 전용 경로: 로그인 상태면 리다이렉트
    return <Navigate to={redirectPath || URL.HOME.link} replace />;
  }

  // 조건에 맞으면 자식 컴포넌트 렌더링
  return <Outlet />;
};

export default AuthRoute;
