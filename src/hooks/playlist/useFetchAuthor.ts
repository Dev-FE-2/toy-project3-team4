import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { STALE_TIME } from '@/constant';
import type { IUserAPISchema } from '@/types';

const useFetchAuthor = (userSn: string) => {
  /**
   * @param {string} userSn - 사용자 고유 ID
   */
  return useQuery<IUserAPISchema | null, Error>({
    queryKey: ['playlist', userSn],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });
};

export default useFetchAuthor;
