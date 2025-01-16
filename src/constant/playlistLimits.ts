export const PLAYLIST_LIMITS = {
  MAX_TITLE_LENGTH: 100, // 제목 최대 길이
  MAX_CONTENT_LENGTH: 1000, // 설명 최대 길이
  MAX_TAG_LENGTH: 20, // 태그명 최대 길이
  MAX_TAGS: 10, // 태그 최대 개수
  MIN_VIDEOS: 1, // 영상 최소 개수
  MIN_TAGS: 1, // 태그 최소 개수
  ALLOWED_VIDEO_DOMAINS: ['youtube.com', 'youtu.be', 'vimeo.com'] as const, // 허용된 영상 플랫폼 도메인
} as const;
