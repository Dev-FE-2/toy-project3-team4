import { formatISODurationToHHMMSS, formatSecondsToHHMMSS } from '@/utils';
import type { Video } from '@/types';
import defaultImage from '@/assets/avatar.svg';

type VideoInfo = Omit<Video, 'url'>;

export const fetchYouTubeInfo = async (videoId: string): Promise<VideoInfo> => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY; // YouTube API 키를 입력
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`,
  ).then((res) => res.json());

  const { title, description, thumbnails, channelTitle, publishedAt } =
    response.items[0].snippet;
  const { duration } = response.items[0].contentDetails;

  return {
    videoId,
    title,
    description,
    thumbnail: thumbnails.high.url,
    author: channelTitle,
    authorImgUrl: defaultImage, // 유튜브 채널 이미지는 부가적으로 api 호출해야 해서 임시로 defaultImage로 대체
    publishedAt,
    duration: formatISODurationToHHMMSS(duration),
    platform: 'youtube',
  };
};

export const fetchVimeoInfo = async (videoId: string): Promise<VideoInfo> => {
  const response = await fetch(
    `https://vimeo.com/api/v2/video/${videoId}.json`,
  ).then((res) => res.json());

  const data = response[0];

  return {
    videoId,
    title: data.title,
    description: data.description,
    duration: formatSecondsToHHMMSS(data.duration),
    thumbnail: data.thumbnail_large,
    author: data.user_name,
    authorImgUrl: data.user_portrait_huge || defaultImage,
    publishedAt: data.upload_date,
    platform: 'vimeo',
  };
};
