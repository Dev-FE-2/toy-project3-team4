import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { useUserSn } from '@/store';
import { STALE_TIME } from '@/constant';
import type { IUserAPISchema } from '@/types';

const useFetchMyUserInfo = () => {
  const userSn = useUserSn();

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

export default useFetchMyUserInfo;
