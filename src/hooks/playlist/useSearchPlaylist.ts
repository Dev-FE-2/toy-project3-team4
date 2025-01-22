import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { searchPlaylist } from '@/api';
import { IPlaylistAPISchema } from '@/types';

const useSearchPlaylist = (keyword: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['searchPlaylist', keyword] });
  }, [keyword, queryClient]);

  return useInfiniteQuery<
    IPlaylistAPISchema[],
    Error,
    InfiniteData<IPlaylistAPISchema[]>,
    ['searchPlaylist', string],
    string | undefined
  >({
    queryKey: ['searchPlaylist', keyword],
    queryFn: ({ pageParam }) => {
      return searchPlaylist(keyword, pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.length < 5) return undefined;
      return lastPage[lastPage.length - 1].playlistSn ?? undefined;
    },
    initialPageParam: undefined,
    enabled: !!keyword,
  });
};

export default useSearchPlaylist;
