import { formatISODurationToHHMMSS, formatSecondsToHHMMSS } from '@/utils';
import type { Video } from '@/types';

export const fetchYouTubeInfo = async (url: string): Promise<Video> => {
  const videoId = url.includes('v=')
    ? url.split('v=')[1]?.split('&')[0]
    : url.split('.be/')[1]?.split('?')[0]; // 유튜브 영상 ID 추출
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY; // YouTube API 키를 입력
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`,
  ).then((res) => res.json());

  const { title, description, thumbnails } = response.items[0].snippet;
  const { duration } = response.items[0].contentDetails;

  return {
    url,
    title,
    description,
    duration: formatISODurationToHHMMSS(duration),
    thumbnail: thumbnails.high.url,
    platform: 'youtube',
  };
};

export const fetchVimeoInfo = async (url: string): Promise<Video> => {
  const videoId = url.split('/').pop(); // Vimeo 영상 ID 추출
  const response = await fetch(
    `https://vimeo.com/api/v2/video/${videoId}.json`,
  ).then((res) => res.json());

  const data = response[0];

  return {
    url,
    title: data.title,
    description: data.description,
    duration: formatSecondsToHHMMSS(data.duration),
    thumbnail: data.thumbnail_large,
    platform: 'vimeo',
  };
};
