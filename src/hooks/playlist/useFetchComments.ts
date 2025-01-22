import { useQueries } from '@tanstack/react-query';
import { getComments } from '@/api';
import { STALE_TIME } from '@/constant';
import type { ICommentAPISchema } from '@/types';

const useFetchComments = (commentSns: string[]) => {
  return useQueries<ICommentAPISchema[]>({
    queries: commentSns.map((sn) => ({
      queryKey: ['comment', sn],
      queryFn: async () => {
        if (!sn) throw new Error('Invalid commentSn');
        return await getComments(sn); // 각 commentSn으로 API 호출
      },
      staleTime: STALE_TIME,
      refetchOnWindowFocus: false,
    })),
  });
};

export default useFetchComments;
