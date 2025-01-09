import { NavLink } from 'react-router-dom';
import { NAV_ITEM_DESKTOP, URL } from '../../../constant';
import { Logo, ProfileImage } from '../../../components';
import { padding } from '../../../styles';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  return (
    <S.SideNavBar>
      <Logo width="280px" padding={`40px ${padding.lg}`} />
      <S.Navigation>
        <ul>
          {NAV_ITEM_DESKTOP.map((navItem, index) => (
            <S.NavItem key={`${index}-${navItem.text}`} padding={padding.lg}>
              {navItem.link === URL.PROFILE.link ? (
                <NavLink to={navItem.link}>
                  <ProfileImage width="28px" /> <div>{navItem.text}</div>
                </NavLink>
              ) : (
                <NavLink to={navItem.link}>
                  <div>{navItem.icon}</div> <div>{navItem.text}</div>
                </NavLink>
              )}
            </S.NavItem>
          ))}
        </ul>
      </S.Navigation>
      <S.Themore padding={padding.md}>
        <S.NavItem padding={padding.lg}>㆔ 더보기</S.NavItem>
      </S.Themore>
    </S.SideNavBar>
  );
};

export default SideNavBar;
