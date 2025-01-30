import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePlaylist } from '@/api';
import { useContextFeed } from '@/hooks';
import type { IPlaylistAPISchema } from '@/types';

const useUpdateLikes = (playlistSn: string) => {
  const queryClient = useQueryClient();
  const { updateLikes: updateLikesContext } = useContextFeed(playlistSn);

  return useMutation<void, Error, { playlistSn: string; newLikes: string[] }>({
    mutationFn: async ({ playlistSn, newLikes }) => {
      if (!playlistSn || !newLikes) throw new Error('Invalid update data');
      await updatePlaylist(playlistSn, { likes: newLikes });
      updateLikesContext(playlistSn, newLikes);
    },
    onSuccess: (_, { playlistSn, newLikes }) => {
      queryClient.setQueryData(
        ['playlists'],
        (prevData: IPlaylistAPISchema[]) => {
          if (!prevData) return prevData;

          return prevData.map((playlist) =>
            playlist.playlistSn === playlistSn
              ? { ...playlist, likes: newLikes }
              : playlist,
          );
        },
      );
    },
    onError: (error: Error) => {
      console.error('좋아요 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateLikes;
