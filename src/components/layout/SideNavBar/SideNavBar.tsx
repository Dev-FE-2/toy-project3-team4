import { NavLink } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { URL } from '@/constant';
import { desktopNavItems, navIconSize } from '@/navigation';
import { Logo, ProfileImage } from '@/components';
import * as S from './SideNavBar.styles';
import { useAuth } from '@/hooks';
import { useUser } from '@/store';

const SideNavBar = () => {
  const { logout } = useAuth();
  const user = useUser();
  return (
    <S.SideNavBar>
      <S.LogoWrap>
        <Logo width="14rem" />
      </S.LogoWrap>
      <S.Navigation>
        <ul>
          {desktopNavItems.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <S.NavItem as={NavLink} to={navItem.link} className="menu">
                {navItem.link === URL.PROFILE.link ? (
                  <>
                    <ProfileImage width="2.4rem" /> <span>{navItem.text}</span>
                  </>
                ) : (
                  <>
                    {navItem.icon} <span>{navItem.text}</span>
                  </>
                )}
              </S.NavItem>
            </li>
          ))}
        </ul>
      </S.Navigation>
      <S.Themore>
        <S.NavItem className="menu">
          <RiMenuFill size={navIconSize} /> <span>더보기</span>
        </S.NavItem>
        {/* 임시로 로그아웃 버튼 추가, 추후 수정 필요 */}
        {user && (
          <S.NavItem className="menu" onClick={logout}>
            <RiMenuFill size={navIconSize} /> <span>로그아웃</span>
          </S.NavItem>
        )}
      </S.Themore>
    </S.SideNavBar>
  );
};

export default SideNavBar;
