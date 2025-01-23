import { NavLink } from 'react-router-dom';
import { MOBILE_NAV_ITEMS, URL, PATH_PARAMS } from '@/constant';
import { NavMenu } from '@/components';
import * as S from './MobileNavBar.styles';
import { useUserSn } from '@/store';

const MobileNavBar = () => {
  const userSn = useUserSn();

  return (
    <S.MobileNavBar>
      <S.Navigation>
        <ul>
          {MOBILE_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <NavLink
                to={
                  navItem.link === URL.PROFILE.link
                    ? userSn
                      ? URL.PROFILE.link.replace(PATH_PARAMS.USER_SN, userSn)
                      : URL.SIGNIN.link
                    : navItem.link
                }
                aria-label={navItem.text}
              >
                <NavMenu
                  iconName={navItem.iconName}
                  link={navItem.link}
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
