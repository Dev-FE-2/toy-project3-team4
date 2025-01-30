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
      // feed 리스트 조회 캐시 업데이트
      queryClient.setQueryData(
        ['playlists'],
        (prevFeedList: IPlaylistAPISchema[]) => {
          if (!prevFeedList) return prevFeedList;

          return prevFeedList.map((playlist) =>
            playlist.playlistSn === playlistSn
              ? { ...playlist, likes: newLikes }
              : playlist,
          );
        },
      );

      // 개별 플레이리스트(feed) 캐시 업데이트
      queryClient.setQueryData(
        ['playlist', playlistSn],
        (prevPlaylist: IPlaylistAPISchema) => {
          if (!prevPlaylist) return prevPlaylist;

          return {
            ...prevPlaylist,
            likes: newLikes,
          };
        },
      );
    },
    onError: (error: Error) => {
      console.error('좋아요 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateLikes;
