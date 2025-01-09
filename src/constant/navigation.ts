/** Navigation에서 사용 */
import { URL } from '../constant';

const NAV_ITEM = [
  {
    ...URL.HOME,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'home',
  },
  {
    ...URL.SIGNIN,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'signin',
  },
  {
    ...URL.PROFILE,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'person',
  },
];

export { NAV_ITEM };
