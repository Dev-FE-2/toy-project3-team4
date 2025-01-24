import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '@/api';
import { useUserSn } from '@/store';
import type { IUserAPISchema } from '@/types';

const useFetchMyUserInfo = () => {
  const userSn = useUserSn();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['myInfo'] });
  }, [queryClient]);

  return useQuery<IUserAPISchema | null, Error>({
    queryKey: ['myInfo'],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid my userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn,
  });
};

export default useFetchMyUserInfo;
