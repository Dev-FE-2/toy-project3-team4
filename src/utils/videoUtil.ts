import { fetchVimeoInfo, fetchYouTubeInfo } from '@/api';

export const getVideoPlatformId = (url: string) => {
  const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu.be\/)([^&\n?#]+)/;
  const vimeoRegex = /vimeo\.com\/([0-9]+)/;

  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return {
      platform: 'youtube',
      videoId: youtubeMatch[1],
    };
  }

  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return {
      platform: 'vimeo',
      videoId: vimeoMatch[1],
    };
  }

  return null;
};

export const getVideoInfo = async (url: string) => {
  const platformId = getVideoPlatformId(url);

  if (!platformId) {
    throw new Error('지원하지 않는 영상 플랫폼입니다.');
  }

  if (platformId.platform === 'youtube') {
    const videoInfo = await fetchYouTubeInfo(platformId.videoId);
    return { ...videoInfo, url };
  } else if (platformId.platform === 'vimeo') {
    const videoInfo = await fetchVimeoInfo(platformId.videoId);
    return { ...videoInfo, url };
  }
};
