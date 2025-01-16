import { useQuery } from '@tanstack/react-query';
import { getAllPlaylist } from '@/api';
import { STALE_TIME } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

const useFetchAllPlaylist = () => {
  return useQuery<IPlaylistAPISchema[] | null, Error>({
    queryKey: ['playlists'],
    queryFn: async () => await getAllPlaylist(),
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });
};

export default useFetchAllPlaylist;
