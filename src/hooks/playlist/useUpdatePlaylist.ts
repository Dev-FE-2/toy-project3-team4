import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePlaylist } from '@/api';
import { QUERY_KEYS } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

const useUpdatePlaylist = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void,
    Error,
    { playlistSn: string; updates: Partial<IPlaylistAPISchema> }
  >({
    mutationFn: async ({ playlistSn, updates }) => {
      if (!playlistSn || !updates) throw new Error('Invalid update data');
      await updatePlaylist(playlistSn, updates);
    },
    onSuccess: (_, { playlistSn, updates }) => {
      // 개별 플레이리스트(feed) 캐시 업데이트
      queryClient.setQueryData(
        [QUERY_KEYS.PLAYLIST, playlistSn],
        (prevPlaylist: IPlaylistAPISchema) => {
          if (!prevPlaylist) return prevPlaylist;

          return {
            ...prevPlaylist,
            ...updates,
          };
        },
      );

      // 최신 데이터 반영 (백그라운드에서 refetch)
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PLAYLIST, playlistSn],
      });
    },
    onError: (error: Error) => {
      console.error('플레이리스트 업데이트 실패:', error.message);
    },
  });
};

export default useUpdatePlaylist;
