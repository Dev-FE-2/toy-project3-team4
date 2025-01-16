import { Logo, MainNavItems, MoreNavItems, FollowNavItems } from '@/components';
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
          <FollowNavItems />
          <MoreNavItems />
        </S.Navigation>
      </article>
    </S.SideNavBar>
  );
};

export default SideNavBar;
