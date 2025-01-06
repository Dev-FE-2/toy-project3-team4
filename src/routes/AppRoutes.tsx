import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { URL } from '../constant';
import { default as ProtectedRoute } from './ProtectedRoute';
import { Layout } from '../layout';
import { HomePage, SignInPage, ProfilePage } from '../pages';

function Router() {
  const { isLoggedIn } = { isLoggedIn: true };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.signin.link} element={<SignInPage />} />
        <Route path={URL.index.link} element={<Layout />}>
          {/* 기본 경로 리다이렉트 설정 */}
          <Route index element={<Navigate to={URL.home.link} replace />} />

          <Route path={URL.home.name} element={<HomePage />} />

          <Route
            path={URL.profile.name}
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
