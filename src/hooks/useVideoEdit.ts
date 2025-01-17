import { useState } from 'react';
import { fetchVimeoInfo, fetchYouTubeInfo } from '@/api';
import { usePlaylistContext } from '@/context';
import { PLAYLIST_LIMITS } from '@/constant';
import type { Video } from '@/types';

const useVideoEdit = () => {
  const {
    videoUrl,
    setVideoUrl,
    videos,
    setVideos,
    thumbnailUrl,
    setThumbnailUrl,
    videoValidError,
    setVideoValidError,
  } = usePlaylistContext();

  const [videoUrlError, setVideoUrlError] = useState('');
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  // 영상 링크 유효성 검사
  const validateVideoUrl = (url: string): boolean => {
    try {
      const parsedUrl = new URL(url);
      return PLAYLIST_LIMITS.ALLOWED_VIDEO_DOMAINS.some((domain) =>
        parsedUrl.hostname.includes(domain),
      );
    } catch {
      return false;
    }
  };

  // 영상 링크로 원본 데이터 페칭
  const fetchVideoInfo = async (url: string): Promise<Video> => {
    setIsLoadingVideo(true);
    try {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return await fetchYouTubeInfo(url);
      } else if (url.includes('vimeo.com')) {
        return await fetchVimeoInfo(url);
      } else {
        throw new Error('지원하지 않는 영상 플랫폼입니다.');
      }
    } catch (error) {
      console.error('비디오 페치 오류: ', error);
      throw new Error('비디오 정보를 가져올 수 없습니다.');
    } finally {
      setIsLoadingVideo(false);
    }
  };

  // 플레이리스트에 영상 추가
  const addVideo = async () => {
    setVideoUrlError('');
    setVideoValidError('');

    if (!videoUrl.trim()) {
      setVideoUrlError('URL을 입력해주세요.');
      return;
    }

    if (!validateVideoUrl(videoUrl)) {
      setVideoUrlError('지원하지 않는 동영상 URL입니다.');
      return;
    }

    try {
      const videoInfo = await fetchVideoInfo(videoUrl);
      const newVideo: Video = {
        url: videoUrl,
        title: videoInfo.title,
        description: videoInfo.description,
        duration: videoInfo.duration,
        thumbnail: videoInfo.thumbnail,
        platform: videoInfo.platform,
      };

      setVideos((prev) => [...prev, newVideo]);
      setVideoUrl('');

      if (videos.length === 0) {
        setThumbnailUrl(videoInfo.thumbnail);
      }
    } catch (error) {
      console.error(error);
      setVideoUrlError('비디오 정보를 가져올 수 없습니다.');
    }
  };

  // 플레이리스트에서 영상 제거
  const removeVideo = (videoId: string) => {
    setVideos((prev) => {
      const newVideos = prev.filter((video) => video.url !== videoId);
      if (videoId === prev[0]?.url && newVideos.length > 0) {
        setThumbnailUrl(newVideos[0].thumbnail);
      } else if (newVideos.length === 0) {
        setThumbnailUrl('');
      }
      return newVideos;
    });
  };

  // 플레이리스트에서 영상 개수 유효성 검사
  const validate = () => {
    if (videos.length < PLAYLIST_LIMITS.MIN_VIDEOS) {
      setVideoValidError('최소 1개 이상의 비디오를 추가해주세요.');
      return false;
    }

    setVideoValidError(''); // 기존 에러 초기화
    return true;
  };

  return {
    videoUrl,
    setVideoUrl,
    videoUrlError,
    videos,
    setVideos,
    isLoadingVideo,
    thumbnailUrl,
    videoValidError,
    addVideo,
    removeVideo,
    validate,
  };
};

export default useVideoEdit;
