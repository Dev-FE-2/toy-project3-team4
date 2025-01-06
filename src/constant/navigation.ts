/** Navigation에서 사용 */

import { URL } from '../constant';

const NAV_ITEM = [
  {
    ...URL.home,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'home',
  },
  {
    ...URL.signin,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'signin',
  },
  {
    ...URL.profile,
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'person',
  },
];

export { NAV_ITEM };
