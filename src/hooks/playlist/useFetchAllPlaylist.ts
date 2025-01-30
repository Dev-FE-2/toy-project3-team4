import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllPlaylist } from '@/api';
import { STALE_TIME } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

const useFetchAllPlaylist = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['playlists'] });
  }, [queryClient]);

  return useQuery<IPlaylistAPISchema[] | null, Error>({
    queryKey: ['playlists'],
    queryFn: async () => await getAllPlaylist(),
    staleTime: STALE_TIME,
  });
};

export default useFetchAllPlaylist;
