import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/api';
import { useUserSn } from '@/store';
import { QUERY_KEYS } from '@/constant';
import type { IUserAPISchema } from '@/types';

const useUpdateMyBookmarks = () => {
  const userSn = useUserSn();
  const queryClient = useQueryClient();

  return useMutation<void, Error, { newBookmarks: string[] }>({
    mutationFn: async ({ newBookmarks }) => {
      if (!userSn || !newBookmarks) throw new Error('Invalid update data');
      await updateUser(userSn, { bookmarks: newBookmarks });
    },
    onSuccess(_, { newBookmarks }) {
      // 캐시 업데이트
      queryClient.setQueryData(
        [QUERY_KEYS.MY_INFO],
        (prevData: IUserAPISchema[]) => {
          if (!prevData) return prevData;

          return {
            ...prevData,
            bookmarks: newBookmarks,
          };
        },
      );

      // 최신 데이터 반영 (백그라운드에서 refetch)
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.MY_INFO] });
    },
    onError: (error: Error) => {
      console.error('북마크 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateMyBookmarks;
