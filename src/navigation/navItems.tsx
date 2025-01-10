import { ReactNode } from 'react';
import {
  RiHome4Line,
  RiSearchLine,
  RiUserFollowLine,
  RiAddCircleLine,
  RiUserSettingsLine,
  RiVipDiamondLine,
} from 'react-icons/ri';
import { URL } from '@/constant';

type NavItem = {
  text: string;
  link: string;
  icon: ReactNode;
};

export const navIconSize = '2.4rem';

const desktopNavItems: NavItem[] = [
  {
    ...URL.HOME,
    icon: <RiHome4Line size={navIconSize} />,
  },
  {
    ...URL.SEARCH,
    icon: <RiSearchLine size={navIconSize} />,
  },
  {
    ...URL.FOLLOWPLI,
    icon: <RiUserFollowLine size={navIconSize} />,
  },
  {
    ...URL.INSERTPLI,
    icon: <RiAddCircleLine size={navIconSize} />,
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const mobileNavItems: NavItem[] = [
  {
    ...URL.HOME,
    icon: <RiHome4Line size={navIconSize} />,
  },
  {
    ...URL.FOLLOWPLI,
    icon: <RiUserFollowLine size={navIconSize} />,
  },
  {
    ...URL.INSERTPLI,
    icon: <RiAddCircleLine size={navIconSize} />,
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const themoreNavItems: NavItem[] = [
  {
    ...URL.USERINFO,
    icon: <RiUserSettingsLine size={navIconSize} />,
  },
  {
    ...URL.INTERESTS,
    icon: <RiVipDiamondLine size={navIconSize} />,
  },
];

export { desktopNavItems, mobileNavItems, themoreNavItems };
