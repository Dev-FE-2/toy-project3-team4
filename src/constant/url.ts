/** Routes에서 사용 */
type Url = Record<string, { text: string; link: string }>;

export const PATH_PARAMS = {
  USER_SN: ':userSn',
};

/**
 * 라우팅, 네비게이션에 필요한 url 객체
 * key 값은 복잡성을 줄이기 위해 다른 상수로 만들지 않음
 * @return Url
 */
export const URL: Url = {
  INDEX: { text: '', link: '/' },
  HOME: { text: '홈', link: '/home' },
  SIGNIN: { text: '로그인', link: '/signin' },
  SEARCH: { text: '검색', link: '/search' },
  FOLLOWPLI: { text: '팔로우', link: '/followpli' },
  PROFILE: { text: '프로필', link: `/profile/${PATH_PARAMS.USER_SN}` },
  INTERESTS: { text: '관심사 선택', link: '/interests' },
  USERINFO: { text: '내 정보 수정', link: '/userinfo' },
  VIEWPLI: {
    text: '플레이리스트 상세',
    link: '/playlists/view',
  },
  INSERTPLI: {
    text: '플레이리스트 생성',
    link: '/playlists/insert',
  },
  UPDATEPLI: {
    text: '플레이리스트 수정',
    link: '/playlists/update',
  },
} as const;

export const QUERY_PARAMS = {
  PLAYLIST_SN: 'playlistSn',
  PLAYLIST_INFO: 'playlistInfo',
  PLAYLIST_INDEX: 'playlistIndex',
  PLAYLIST_COMMENTS: 'comments',
  VIDEO_INDEX: 'videoIndex',
};
