import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePlaylist } from '@/api';
import { useContextFeed } from '@/hooks';
import { QUERY_KEYS } from '@/constant';
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
      const feedListQuery = queryClient.getQueryData<IPlaylistAPISchema[]>([
        QUERY_KEYS.FEED_LIST,
      ]);
      const playlistQuery = queryClient.getQueryData<IPlaylistAPISchema[]>([
        QUERY_KEYS.PLAYLIST,
        playlistSn,
      ]);

      // feed 리스트 조회 캐시 업데이트
      if (feedListQuery) {
        queryClient.setQueryData(
          [QUERY_KEYS.FEED_LIST],
          (prevFeedList: IPlaylistAPISchema[]) =>
            prevFeedList.map((playlist) =>
              playlist.playlistSn === playlistSn
                ? { ...playlist, likes: newLikes }
                : playlist,
            ),
        );
      }

      // 개별 플레이리스트(feed) 캐시 업데이트
      if (playlistQuery) {
        queryClient.setQueryData(
          [QUERY_KEYS.PLAYLIST, playlistSn],
          (prevPlaylist: IPlaylistAPISchema) => ({
            ...prevPlaylist,
            likes: newLikes,
          }),
        );
      }
    },
    onError: (error: Error) => {
      console.error('좋아요 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateLikes;
