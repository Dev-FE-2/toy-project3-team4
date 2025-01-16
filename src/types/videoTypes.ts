export interface Video {
  url: string;
  title: string;
  description?: string;
  thumbnail: string;
  platform: 'youtube' | 'vimeo';
}
