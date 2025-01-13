import { NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { useUser } from '@/store';
import { DESKTOP_NAV_ITEMS } from '@/constant';
import { Logo, NavMenu } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  const { logout } = useAuth();
  const user = useUser();

  const NAV_ICON_SIZE = '2.4rem';

  return (
    <S.SideNavBar>
      <S.LogoWrap>
        <Logo width="14rem" />
      </S.LogoWrap>

      <S.Navigation>
        <ul>
          {DESKTOP_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <S.NavItem as={NavLink} to={navItem.link}>
                <NavMenu
                  iconName={navItem.iconName}
                  text={navItem.text}
                  size={NAV_ICON_SIZE}
                  link={navItem.link}
                />
              </S.NavItem>
            </li>
          ))}
        </ul>

        <div>
          <S.NavItem>
            <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
          </S.NavItem>

          {/* 임시로 로그아웃 버튼 추가, 추후 수정 필요 */}
          {user && (
            <S.NavItem onClick={logout}>
              <span>로그아웃</span>
            </S.NavItem>
          )}
        </div>
      </S.Navigation>
    </S.SideNavBar>
  );
};

export default SideNavBar;
