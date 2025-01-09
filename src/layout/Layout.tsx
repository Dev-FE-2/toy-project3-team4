import { Outlet, useLocation } from 'react-router-dom';
import { getPageTitle } from '../utils';
import { MobileHeader, SideNavBar, MobileNavBar } from '../components';
import * as S from './Layout.styles';

const Layout = () => {
  const location = useLocation();

  return (
    <S.Layout>
      <MobileHeader />
      <body className="page-container">
        <SideNavBar />
        <MobileNavBar />
        <main>
          <section className="page-content">
            <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
            <Outlet />
          </section>
        </main>
      </body>
    </S.Layout>
  );
};

export default Layout;
