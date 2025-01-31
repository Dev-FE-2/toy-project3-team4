import { useQuery } from '@tanstack/react-query';
import { getAllPlaylist } from '@/api';
import { LIST_STALE_TIME, QUERY_KEYS } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

const useFetchAllPlaylist = () => {
  return useQuery<IPlaylistAPISchema[] | null, Error>({
    queryKey: [QUERY_KEYS.FEED_LIST],
    queryFn: async () => await getAllPlaylist(),
    staleTime: LIST_STALE_TIME,
  });
};

export default useFetchAllPlaylist;
