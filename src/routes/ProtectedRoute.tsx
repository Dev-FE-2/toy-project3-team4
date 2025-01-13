import { Navigate, Outlet } from 'react-router-dom';
import { URL } from '@/constant';
import { useUserFetching, useUserSn } from '@/store';
import { LoaderWrapper } from '@/components';

const ProtectedRoute = ({
  redirectPath = URL.SIGNIN.link,
}: {
  redirectPath?: string;
}) => {
  // 인증되지 않았으면 redirect path로 리다이렉트
  // 인증되었으면 자식 컴포넌트를 렌더링
  const userSn = useUserSn();
  const isUserFetching = useUserFetching();

  if (isUserFetching) {
    return <LoaderWrapper isLoading={isUserFetching} />;
  }

  return !userSn ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
