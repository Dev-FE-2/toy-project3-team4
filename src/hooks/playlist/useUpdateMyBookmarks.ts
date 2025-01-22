import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/api';
import { useUserSn } from '@/store';
import { useContextFeed } from '@/hooks';

const useUpdateMyBookmarks = (playlistSn: string) => {
  const userSn = useUserSn();
  const { updateMyBookmarks: updateBookmarksContext } =
    useContextFeed(playlistSn);

  return useMutation<void, Error, { newBookmarks: string[] }>({
    mutationFn: async ({ newBookmarks }) => {
      if (!userSn || !newBookmarks) throw new Error('Invalid update data');
      await updateUser(userSn, { bookmarks: newBookmarks });
      updateBookmarksContext(newBookmarks);
    },
    onError: (error: Error) => {
      console.error('북마크 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateMyBookmarks;
