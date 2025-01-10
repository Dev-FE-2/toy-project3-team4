import { NavLink } from 'react-router-dom';
import { URL } from '@/constant';
import { mobileNavItems } from '@/navigation';
import { ProfileImage } from '@/components';
import * as S from './MobileNavBar.styles';

const SideNavBar = () => {
  return (
    <S.MobileNavBar>
      <S.Navigation>
        <ul>
          {mobileNavItems.map((navItem, index) =>
            navItem.link === URL.PROFILE.link ? (
              <S.NavItem key={`${index}-${navItem.text}`}>
                <ProfileImage link={URL.PROFILE.link} width="2.8rem" />
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
