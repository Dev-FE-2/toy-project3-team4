import { useQuery } from '@tanstack/react-query';
import { getPlaylist } from '@/api';
import { STALE_TIME, QUERY_KEYS } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

const getFetchPlayListOptions = (playlistSn: string) => ({
  queryKey: [QUERY_KEYS.PLAYLIST, playlistSn],
  queryFn: async () => {
    if (!playlistSn) throw new Error('Invalid playlist ID');
    return await getPlaylist(playlistSn);
  },
  enabled: !!playlistSn,
  staleTime: STALE_TIME,
  refetchOnWindowFocus: false,
});

const useFetchPlaylist = (playlistSn: string) => {
  /**
   * @param {string} playlistSn - 플레이리스트 고유 ID
   */
  return useQuery<IPlaylistAPISchema | null, Error>(
    getFetchPlayListOptions(playlistSn),
  );
};

export { getFetchPlayListOptions, useFetchPlaylist };
