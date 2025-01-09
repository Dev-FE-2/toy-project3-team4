import { Outlet, useLocation } from 'react-router-dom';
import { getPageTitle } from '../utils';
import { MobileHeader, SideNavBar, MobileNavBar } from '../components';
import * as S from './Layout.styles';

const Layout = () => {
  const location = useLocation();

  return (
    <S.Layout>
      <MobileHeader />
      <div className="page-container">
        <SideNavBar />
        <MobileNavBar />
        <main>
          <section className="page-content">
            <h1 className="page-title">{getPageTitle(location.pathname)}</h1>
            <Outlet />
          </section>
        </main>
      </div>
    </S.Layout>
  );
};

export default Layout;
