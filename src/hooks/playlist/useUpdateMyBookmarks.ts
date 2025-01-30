import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/api';
import { useUserSn } from '@/store';
import { useContextFeed } from '@/hooks';
import type { IUserAPISchema } from '@/types';

const useUpdateMyBookmarks = (playlistSn: string) => {
  const userSn = useUserSn();
  const queryClient = useQueryClient();
  const { updateMyBookmarks: updateBookmarksContext } =
    useContextFeed(playlistSn);

  return useMutation<void, Error, { newBookmarks: string[] }>({
    mutationFn: async ({ newBookmarks }) => {
      if (!userSn || !newBookmarks) throw new Error('Invalid update data');
      await updateUser(userSn, { bookmarks: newBookmarks });
      updateBookmarksContext(newBookmarks);
    },
    onSuccess(_, { newBookmarks }) {
      queryClient.setQueryData(['myInfo'], (prevData: IUserAPISchema[]) => {
        if (!prevData) return prevData;

        return {
          ...prevData,
          bookmarks: newBookmarks,
        };
      });
    },
    onError: (error: Error) => {
      console.error('북마크 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateMyBookmarks;
