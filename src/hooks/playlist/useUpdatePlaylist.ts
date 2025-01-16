import { useMutation } from '@tanstack/react-query';
import { updatePlaylist } from '@/api';
import type { IPlaylistAPISchema } from '@/types';

const useUpdatePlaylist = () => {
  return useMutation<
    void,
    Error,
    { playlistSn: string; updates: Partial<IPlaylistAPISchema> }
  >({
    mutationFn: async ({ playlistSn, updates }) => {
      if (!playlistSn || !updates) throw new Error('Invalid update data');
      await updatePlaylist(playlistSn, updates);
    },
    onSuccess: () => {
      console.log('플레이리스트 업데이트 성공!');
    },
    onError: (error: Error) => {
      console.error('플레이리스트 업데이트 실패:', error.message);
    },
  });
};

export default useUpdatePlaylist;
