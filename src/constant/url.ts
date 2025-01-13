/** Routes에서 사용 */
type Url = Record<string, { text: string; link: string }>;

/**
 * 라우팅, 네비게이션에 필요한 url 객체
 * key 값은 복잡성을 줄이기 위해 다른 상수로 만들지 않음
 * @return Url
 */
const URL: Url = {
  INDEX: { text: '', link: '/' },
  HOME: { text: '홈', link: '/home' },
  SIGNIN: { text: '로그인', link: '/signin' },
  SEARCH: { text: '검색', link: '/search' },
  FOLLOWPLI: { text: '팔로우', link: '/followpli' },
  PROFILE: { text: '프로필', link: '/profile' },
  INTERESTS: { text: '관심사 선택', link: '/interests' },
  USERINFO: { text: '내 정보 수정', link: '/userinfo' },
  VIEWPLI: {
    text: '플레이리스트 상세',
    link: '/playlists/:pliId/view',
  },
  INSERTPLI: {
    text: '플레이리스트 생성',
    link: '/playlists/insert',
  },
  UPDATEPLI: {
    text: '플레이리스트 수정',
    link: '/playlists/:pliId/update',
  },
} as const;

export { URL };
