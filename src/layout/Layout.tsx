import { Outlet, useLocation } from 'react-router-dom';
import { getPageTitle } from '../utils';
import { NavBar } from '../components';
import * as S from './Layout.styles';

const Layout = () => {
  const location = useLocation();

  return (
    <S.Layout>
      <NavBar />
      <main>
        <section className="page-container">
          <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
          <Outlet />
        </section>
      </main>
    </S.Layout>
  );
};

export default Layout;
