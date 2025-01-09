import { Navigate } from 'react-router-dom';
import { Layout } from '@/layout';
import { URL } from '@/constant';
import ProtectedRoute from './ProtectedRoute';
import {
  HomePage,
  SignInPage,
  SearchPage,
  ProfilePage,
  FollowPlaylistPage,
  PlaylistViewPage,
  UpsertPlaylistPage,
  InterestPage,
  UserInfoPage,
} from '@/pages';

export const routeConfig = [
  {
    path: URL.INDEX.link,
    element: <Layout />,
    children: [
      // 기본 경로 리다이렉트 설정
      {
        index: true,
        element: <Navigate to={URL.HOME.link} replace />,
      },
      { path: URL.HOME.link, element: <HomePage /> },
      { path: URL.SEARCH.link, element: <SearchPage /> },
      { path: URL.FOLLOWPLI.link, element: <FollowPlaylistPage /> },
      { path: URL.VIEWPLI.link, element: <PlaylistViewPage /> },
      { path: URL.INSERTPLI.link, element: <UpsertPlaylistPage /> },
      { path: URL.UPDATEPLI.link, element: <UpsertPlaylistPage /> },
      { path: URL.PROFILE.link, element: <ProfilePage /> },
      {
        element: <ProtectedRoute />,
        children: [
          // 인증이 필요한 경로 목록
          { path: URL.INTERESTS.link, element: <InterestPage /> },
          { path: URL.USERINFO.link, element: <UserInfoPage /> },
        ],
      },
    ],
  },
  { path: URL.SIGNIN.link, element: <SignInPage /> },
];
