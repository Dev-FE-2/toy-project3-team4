/** Navigation에서 사용 */
import { URL } from '../constant';

type NavItem = {
  text: string;
  link: string;
  icon: string;
};

const NAV_ITEM_DESKTOP: NavItem[] = [
  {
    ...URL.HOME,
    icon: '🏠',
  },
  {
    ...URL.SEARCH,
    icon: '🔍',
  },
  {
    ...URL.FOLLOWPLI,
    icon: '🏃',
  },
  {
    ...URL.INSERTPLI,
    icon: '➕',
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const NAV_ITEM_MOBILE: NavItem[] = [
  {
    ...URL.HOME,
    icon: '🏠',
  },
  {
    ...URL.FOLLOWPLI,
    icon: '🏃',
  },
  {
    ...URL.INSERTPLI,
    icon: '➕',
  },
  {
    ...URL.PROFILE,
    icon: '',
  },
];

const NAV_ITEM_THEMORE: NavItem[] = [
  {
    ...URL.USERINFO,
    icon: '⚙️',
  },
  {
    ...URL.INTERESTS,
    icon: '🧐',
  },
];

export { NAV_ITEM_DESKTOP, NAV_ITEM_MOBILE, NAV_ITEM_THEMORE };
