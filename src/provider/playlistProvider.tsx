import React, { useState } from 'react';
import { PlaylistContext } from '@/context';
import type { Video } from '@/types';

export const PlaylistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // 영상 관련 state
  const [videoUrl, setVideoUrl] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [videoValidError, setVideoValidError] = useState('');

  // 태그 관련 state
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagValidError, setTagValidError] = useState('');

  return (
    <PlaylistContext.Provider
      value={{
        videoUrl,
        setVideoUrl,
        videos,
        setVideos,
        thumbnailUrl,
        setThumbnailUrl,
        videoValidError,
        setVideoValidError,
        tagInput,
        setTagInput,
        tags,
        setTags,
        tagValidError,
        setTagValidError,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
