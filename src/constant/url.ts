/** Routes에서 사용 */
import { URLName } from './urlName';

type Url = Record<URLName, { text: string; link: string }>;

const URL: Url = {
  [URLName.INDEX]: { text: '', link: '/' },
  [URLName.HOME]: { text: 'HOME', link: '/home' },
  [URLName.SIGNIN]: { text: '로그인', link: '/signin' },
  [URLName.SEARCH]: { text: '검색', link: '/search' },
  [URLName.FOLLOWPLI]: { text: '팔로우', link: '/followpli' },
  [URLName.PROFILE]: { text: '프로필', link: '/profile' },
  [URLName.INTERESTS]: { text: '관심사 선택', link: '/interests' },
  [URLName.USERINFO]: { text: '내 정보 수정', link: '/userinfo' },
  [URLName.VIEWPLI]: {
    text: '플레이리스트 상세',
    link: '/playlists/:pliId?/view',
  },
  [URLName.INSERTPLI]: {
    text: '플레이리스트 생성',
    link: '/playlists?/insert',
  },
  [URLName.UPDATEPLI]: {
    text: '플레이리스트 수정',
    link: '/playlists/:pliId?/update',
  },
};

export { URL };
