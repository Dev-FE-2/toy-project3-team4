import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '@/constant';

const ProtectedRoute = ({
  redirectPath = URL.SIGNIN.link,
}: {
  redirectPath?: string;
}) => {
  // 인증되지 않았으면 redirect path로 리다이렉트
  // 인증되었으면 자식 컴포넌트를 렌더링

  // 인증 처리 추후 수정 예정
  const isLoggedIn = true;

  return !isLoggedIn ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
