import { useQuery } from '@tanstack/react-query';
import { getPlaylist } from '@/api';
import type { IPlaylistAPISchema } from '@/types';

const useFetchPlaylist = (playlistSn: string) => {
  /**
   * @param {string} playlistSn - 플레이리스트 고유 ID
   */
  return useQuery<IPlaylistAPISchema | null, Error>({
    queryKey: ['playlist', playlistSn],
    queryFn: async () => {
      if (!playlistSn) throw new Error('Invalid playlist ID');
      return await getPlaylist(playlistSn);
    },
    enabled: !!playlistSn, // playlistSn이 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 신선하게 유지
    refetchOnWindowFocus: false, // 포커스 시 다시 가져오기 방지
  });
};

export default useFetchPlaylist;
