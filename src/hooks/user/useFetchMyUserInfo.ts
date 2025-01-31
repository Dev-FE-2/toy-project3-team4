import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { LONG_STALE_TIME, QUERY_KEYS } from '@/constant';
import { useUserSn } from '@/store';
import type { IUserAPISchema } from '@/types';

const useFetchMyUserInfo = () => {
  const userSn = useUserSn();

  return useQuery<IUserAPISchema | null, Error>({
    queryKey: [QUERY_KEYS.MY_INFO],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid my userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn,
    staleTime: LONG_STALE_TIME,
  });
};

export default useFetchMyUserInfo;
