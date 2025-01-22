import { useMutation } from '@tanstack/react-query';
import { updatePlaylist } from '@/api';
import { useContextFeed } from '@/hooks';

const useUpdateLikes = (playlistSn: string) => {
  const { updateLikes: updateLikesContext } = useContextFeed(playlistSn);

  return useMutation<void, Error, { playlistSn: string; newLikes: string[] }>({
    mutationFn: async ({ playlistSn, newLikes }) => {
      if (!playlistSn || !newLikes) throw new Error('Invalid update data');
      await updatePlaylist(playlistSn, { likes: newLikes });
      updateLikesContext(playlistSn, newLikes);
    },
    onError: (error: Error) => {
      console.error('좋아요 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateLikes;
