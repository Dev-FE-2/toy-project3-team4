/** Navigation에서 사용 */

import { getURL } from '@/utils';
import { URLName } from '../constant';

const NAV_ITEM = [
  {
    ...getURL(URLName.HOME),
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'home',
  },
  {
    ...getURL(URLName.SIGNIN),
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'signin',
  },
  {
    ...getURL(URLName.PROFILE),
    hasSubNav: false,
    firstSubNav: '',
    isSubNav: false,
    parentNav: '',
    icon: 'person',
  },
];

export { NAV_ITEM };
