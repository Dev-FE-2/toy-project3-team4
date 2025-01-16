import { useMutation } from '@tanstack/react-query';
import { addPlaylist } from '@/api';
import type { IPlaylistAPISchema } from '@/types';

const usePostPlaylist = () => {
  return useMutation<void, Error, IPlaylistAPISchema>({
    mutationFn: async (playlistData: IPlaylistAPISchema) => {
      if (!playlistData) throw new Error('Invalid playlist data');
      await addPlaylist(playlistData);
    },
    onSuccess: () => {
      console.log('플레이리스트 추가 성공!');
    },
    onError: (error: Error) => {
      console.error('플레이리스트 추가 실패:', error.message);
    },
  });
};

export default usePostPlaylist;
