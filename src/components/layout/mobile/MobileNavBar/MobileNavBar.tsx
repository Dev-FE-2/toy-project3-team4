import { NavLink } from 'react-router-dom';
import { generateRoutingLink } from '@/utils';
import { MOBILE_NAV_ITEMS } from '@/constant';
import { useUserSn } from '@/store';
import { NavMenu } from '@/components';
import * as S from './MobileNavBar.styles';

const MobileNavBar = () => {
  const userSn = useUserSn();

  return (
    <S.MobileNavBar>
      <S.Navigation>
        <ul>
          {MOBILE_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <NavLink
                to={generateRoutingLink(navItem.link, userSn)}
                aria-label={navItem.text}
              >
                <NavMenu
                  iconName={navItem.iconName}
                  linkForActive={generateRoutingLink(navItem.link, userSn)}
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
