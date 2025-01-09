import { NavLink } from 'react-router-dom';
import { NAV_ITEM_MOBILE, URL } from '@/constant';
import { ProfileImage } from '@/components';
import * as S from './MobileNavBar.styles';

const SideNavBar = () => {
  return (
    <S.MobileNavBar>
      <S.Navigation>
        <ul>
          {NAV_ITEM_MOBILE.map((navItem, index) =>
            navItem.link === URL.PROFILE.link ? (
              <S.NavItem key={`${index}-${navItem.text}`}>
                <ProfileImage link={URL.PROFILE.link} width="28px" />
              </S.NavItem>
            ) : (
              <S.NavItem key={`${index}-${navItem.text}`}>
                <NavLink to={navItem.link}>{navItem.icon}</NavLink>
              </S.NavItem>
            ),
          )}
        </ul>
      </S.Navigation>
    </S.MobileNavBar>
  );
};

export default SideNavBar;
