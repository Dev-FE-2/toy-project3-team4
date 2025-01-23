import { NavLink } from 'react-router-dom';
import { MOBILE_NAV_ITEMS } from '@/constant';
import { NavMenu } from '@/components';
import * as S from './MobileNavBar.styles';
import { useUser } from '@/store';

const MobileNavBar = () => {
  const user = useUser();

  return (
    <S.MobileNavBar>
      <S.Navigation>
        <ul>
          {MOBILE_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <NavLink to={navItem.link} aria-label={navItem.text}>
                <NavMenu
                  iconName={navItem.iconName}
                  link={
                    navItem.link === '/profile/:userSn'
                      ? `/profile/${user?.userSn}`
                      : navItem.link
                  }
                  size="2.8rem"
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </S.Navigation>
    </S.MobileNavBar>
  );
};

export default MobileNavBar;
