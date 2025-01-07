import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { URLName } from '@/constant';
import { default as ProtectedRoute } from './ProtectedRoute';
import { Layout } from '@/layout';
import {
  HomePage,
  SignInPage,
  ProfilePage,
  FollowPlaylistPage,
  PlaylistViewPage,
  UpsertPlaylistPage,
  InterestPage,
  UserInfoPage,
} from '@/pages';
import { SearchPage } from '@/pages/SearchPage';
import { generateChildRoutes, getURLLink } from '@/utils';

function Router() {
  // 추후 인증 처리 필요
  const { isLoggedIn } = { isLoggedIn: true };

  // 인증이 필요한 경로 목록
  const protectedRoutes = generateChildRoutes([
    { name: URLName.INTERESTS, element: <InterestPage /> },
    { name: URLName.USERINFO, element: <UserInfoPage /> },
  ]);

  // 전체 경로 구성
  const routes: RouteObject[] = [
    {
      path: getURLLink(URLName.INDEX),
      element: <Layout />,
      children: [
        /* 기본 경로 리다이렉트 설정 */
        {
          index: true,
          element: <Navigate to={getURLLink(URLName.HOME)} replace />,
        },
        ...generateChildRoutes([
          { name: URLName.HOME, element: <HomePage /> },
          { name: URLName.SEARCH, element: <SearchPage /> },
          { name: URLName.FOLLOWPLI, element: <FollowPlaylistPage /> },
          { name: URLName.VIEWPLI, element: <PlaylistViewPage /> },
          { name: URLName.INSERTPLI, element: <UpsertPlaylistPage /> },
          { name: URLName.UPDATEPLI, element: <UpsertPlaylistPage /> },
          { name: URLName.PROFILE, element: <ProfilePage /> },
        ]),
        {
          element: <ProtectedRoute isLoggedIn={isLoggedIn} />,
          children: protectedRoutes,
        },
      ],
    },
    {
      path: getURLLink(URLName.SIGNIN),
      element: <SignInPage />,
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
}

export default Router;
