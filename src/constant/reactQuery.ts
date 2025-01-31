export const INTERVAL_TIME = 1000 * 60 * 10; // 10분

// 업데이트 가능성이 낮은 경우. ex) 프로필 정보, 팔로잉 상태
export const LONG_STALE_TIME = 1000 * 60 * 15;

// 업데이트 가능성이 높지 않은 경우. ex) 상세페이지
export const CONTENT_STALE_TIME = INTERVAL_TIME;

// 업데이트 가능성이 높은 경우. ex) 댓글 목록, 플레이리스트 목록
export const LIST_STALE_TIME = 1000 * 60 * 1; // 1분 동안 데이터를 신선하게 유지

export const QUERY_KEYS = {
  FEED_LIST: 'playlists',
  PLAYLIST: 'playlist',
  MY_INFO: 'myInfo',
};
