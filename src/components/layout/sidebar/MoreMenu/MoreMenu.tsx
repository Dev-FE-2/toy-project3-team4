import { useAuth } from '@/hooks';
import { useUser } from '@/store';
import { THEMORE_NAV_ITEMS, URL } from '@/constant';
import { NavMenu, NavItem } from '@/components/layout';
import * as S from './MoreMenu.styles';

const MoreMenu = ({ isVisible }: { isVisible: boolean }) => {
  const { logout } = useAuth();
  const user = useUser();

  return (
    <S.MoreMenu $isVisible={isVisible}>
      {THEMORE_NAV_ITEMS.map((navItem, index) => (
        <li key={`${index}-${navItem.text}`}>
          <NavItem link={navItem.link}>
            <NavMenu
              iconName={navItem.iconName}
              text={navItem.text}
              size="1.8rem"
              link={navItem.link}
            />
          </NavItem>
        </li>
      ))}

      <hr />

      {user ? (
        <NavItem onClick={logout}>로그아웃</NavItem>
      ) : (
        <NavItem link={URL.SIGNIN.link}>로그인</NavItem>
      )}
    </S.MoreMenu>
  );
};

export default MoreMenu;
