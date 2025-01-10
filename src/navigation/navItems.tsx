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

const size = '2.4rem';

const desktopNavItems: NavItem[] = [
  {
    ...URL.HOME,
    icon: <RiHome4Line size={size} />,
  },
  {
    ...URL.SEARCH,
    icon: <RiSearchLine size={size} />,
  },
  {
    ...URL.FOLLOWPLI,
    icon: <RiUserFollowLine size={size} />,
  },
  {
    ...URL.INSERTPLI,
    icon: <RiAddCircleLine size={size} />,
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const mobileNavItems: NavItem[] = [
  {
    ...URL.HOME,
    icon: <RiHome4Line size={size} />,
  },
  {
    ...URL.FOLLOWPLI,
    icon: <RiUserFollowLine size={size} />,
  },
  {
    ...URL.INSERTPLI,
    icon: <RiAddCircleLine size={size} />,
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const themoreNavItems: NavItem[] = [
  {
    ...URL.USERINFO,
    icon: <RiUserSettingsLine />,
  },
  {
    ...URL.INTERESTS,
    icon: <RiVipDiamondLine />,
  },
];

export { desktopNavItems, mobileNavItems, themoreNavItems };
