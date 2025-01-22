import { URL } from '@/constant';

type NavItem = {
  text: string;
  link: string;
  iconName: string;
};

export const DESKTOP_NAV_ITEMS: NavItem[] = [
  {
    ...URL.HOME,
    iconName: 'home',
  },
  {
    ...URL.SEARCH,
    iconName: 'search',
  },
  {
    ...URL.FOLLOWPLI,
    iconName: 'followpli',
  },
  {
    ...URL.INSERTPLI,
    iconName: 'insertpli',
  },
  {
    ...URL.PROFILE,
    iconName: 'profile',
  },
];

export const MOBILE_NAV_ITEMS: NavItem[] = [
  {
    ...URL.HOME,
    iconName: 'home',
  },
  {
    ...URL.FOLLOWPLI,
    iconName: 'followpli',
  },
  {
    ...URL.INSERTPLI,
    iconName: 'insertpli',
  },
  {
    ...URL.PROFILE,
    iconName: 'profile',
  },
];

export const THEMORE_NAV_ITEMS: NavItem[] = [
  {
    ...URL.USERINFO,
    iconName: 'userinfo',
  },
  {
    ...URL.INTERESTS,
    iconName: 'interests',
  },
];
