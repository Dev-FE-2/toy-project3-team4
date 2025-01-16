import { useMutation } from '@tanstack/react-query';
import { deletePlaylist } from '@/api';

const useDeletePlaylist = () => {
  return useMutation<void, Error, string>({
    mutationFn: async (playlistSn: string) => {
      if (!playlistSn) throw new Error('Invalid playlist ID');
      await deletePlaylist(playlistSn);
    },
    onSuccess: () => {
      console.log('플레이리스트 삭제 성공!');
    },
    onError: (error: Error) => {
      console.error('플레이리스트 삭제 실패:', error.message);
    },
  });
};

export default useDeletePlaylist;
