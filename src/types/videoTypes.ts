export interface Video {
  videoId: string;
  url: string;
  title: string;
  description?: string;
  thumbnail: string;
  author: string;
  authorImgUrl: string;
  publishedAt: string;
  duration?: string;
  platform: 'youtube' | 'vimeo';
}
