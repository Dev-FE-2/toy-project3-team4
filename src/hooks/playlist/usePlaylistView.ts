import { useMemo, useEffect } from 'react';
import type { ICommentAPISchema } from '@/types';
import useFetchAuthor from './useFetchAuthor';
import useFetchVideos from './useFetchVideos';
import { useFetchComments, useIncrementHits } from '../comment';

const usePlaylistView = (
  playlistSn: string,
  links: string[],
  authorSn: string,
  commentSns: string[],
) => {
  const {
    data: videoInfos,
    isLoading: isVideosLoading,
    error: videosError,
  } = useFetchVideos({ links });
  const { data: author } = useFetchAuthor(authorSn);
  const commentQueries = useFetchComments(commentSns);
  const { mutate: updateHits } = useIncrementHits(playlistSn);

  const commentData = useMemo(
    () =>
      commentQueries
        .filter((query) => query.status === 'success' && query.data)
        .flatMap((query) => query.data || []) as ICommentAPISchema[],
    [commentQueries],
  );

  const isLoadingComments = commentQueries.some((query) => query.isLoading);
  const hasErrorInComments = commentQueries.some((query) => query.isError);

  useEffect(() => {
    const timer = setTimeout(updateHits, 3000);
    return () => clearTimeout(timer);
  }, [updateHits]);

  return {
    author,
    videoInfos,
    isVideosLoading,
    videosError,
    commentData,
    isLoadingComments,
    hasErrorInComments,
  };
};

export default usePlaylistView;
