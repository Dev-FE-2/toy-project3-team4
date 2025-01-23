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
          <MoreNavItems />
        </S.Navigation>
      </article>
    </S.SideNavBar>
  );
};

export default SideNavBar;
