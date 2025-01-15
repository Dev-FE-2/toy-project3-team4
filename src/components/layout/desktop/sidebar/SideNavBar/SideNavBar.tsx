import { Logo, MainNavItems, MoreNavItems } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  return (
    <S.SideNavBar id="sideNavBar">
      <article className="vertical-navbar">
        <S.LogoWrap>
          <Logo width="14rem" />
        </S.LogoWrap>

        <S.Navigation>
          <MainNavItems />
          <nav aria-label="Follower List Menu">follows 네비 영역</nav>
          <MoreNavItems />
        </S.Navigation>
      </article>
    </S.SideNavBar>
  );
};

export default SideNavBar;
