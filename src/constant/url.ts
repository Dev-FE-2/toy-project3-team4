/** Routes에서 사용 */

type Url = {
  [key: string]: {
    text: string;
    name: string;
    link: string;
  };
};

const URL: Url = {
  index: {
    text: '',
    name: '',
    link: '/',
  },
  home: {
    text: 'HOME',
    name: 'home',
    link: '/home',
  },
  signin: {
    text: '로그인',
    name: 'signin',
    link: '/signin',
  },
  profile: {
    text: '프로필',
    name: 'profile',
    link: '/profile',
  },
};

export { URL };
