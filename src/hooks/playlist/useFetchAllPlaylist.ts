import { useQuery } from '@tanstack/react-query';
import { getAllPlaylist } from '@/api';
import type { IPlaylistAPISchema } from '@/types';

const useFetchAllPlaylist = () => {
  return useQuery<IPlaylistAPISchema[] | null, Error>({
    queryKey: ['playlists'],
    queryFn: async () => await getAllPlaylist(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export default useFetchAllPlaylist;
