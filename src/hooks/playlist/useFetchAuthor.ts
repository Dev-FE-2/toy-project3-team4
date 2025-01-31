import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { LONG_STALE_TIME } from '@/constant';
import type { IUserAPISchema } from '@/types';

const useFetchAuthor = (userSn: string) => {
  /**
   * @param {string} userSn - 사용자 고유 ID
   */
  return useQuery<IUserAPISchema | null, Error>({
    queryKey: ['author', userSn],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn,
    staleTime: LONG_STALE_TIME,
    refetchOnWindowFocus: false,
  });
};

export default useFetchAuthor;
