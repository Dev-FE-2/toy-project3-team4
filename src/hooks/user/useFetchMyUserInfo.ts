import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { STALE_TIME } from '@/constant';
import { useUserSn } from '@/store';
import type { IUserAPISchema } from '@/types';

const useFetchMyUserInfo = () => {
  const userSn = useUserSn();

  return useQuery<IUserAPISchema | null, Error>({
    queryKey: ['myInfo'],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid my userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn,
    staleTime: STALE_TIME,
  });
};

export default useFetchMyUserInfo;
