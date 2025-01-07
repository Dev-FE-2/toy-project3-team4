import { Navigate, Outlet } from 'react-router-dom';
import { URLName } from '../constant';
import { getURLLink } from '@/utils';

interface ProtectedRouteParams {
  isLoggedIn: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({
  isLoggedIn,
  redirectPath = getURLLink(URLName.SIGNIN),
}: ProtectedRouteParams) => {
  // 인증되지 않았으면 redirect path로 리다이렉트
  // 인증되었으면 자식 컴포넌트를 렌더링
  return !isLoggedIn ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
