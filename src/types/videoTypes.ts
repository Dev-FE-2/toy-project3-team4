export interface Video {
  url: string;
  title: string;
  description?: string;
  duration?: string;
  thumbnail: string;
  platform: 'youtube' | 'vimeo';
}
