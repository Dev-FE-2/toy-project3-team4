import { createContext, Dispatch, SetStateAction } from 'react';
import type { Video } from '@/types';

interface PlaylistContextType {
  // 영상 관련 state
  videoUrl: string;
  setVideoUrl: Dispatch<SetStateAction<string>>;
  videos: Video[];
  setVideos: Dispatch<SetStateAction<Video[]>>;
  thumbnailUrl: string;
  setThumbnailUrl: Dispatch<SetStateAction<string>>;
  videoValidError: string;
  setVideoValidError: Dispatch<SetStateAction<string>>;

  // 태그 관련 state
  tagInput: string;
  setTagInput: Dispatch<SetStateAction<string>>;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  tagValidError: string;
  setTagValidError: Dispatch<SetStateAction<string>>;
}

export const PlaylistContext = createContext<PlaylistContextType | undefined>(
  undefined,
);
