import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api';
import { useUserSn } from '@/store';
import type { IUserAPISchema } from '@/types';

const useFetchMyInfo = () => {
  const userSn = useUserSn();

  return useQuery<IUserAPISchema | null, Error>({
    queryKey: ['playlist', userSn],
    queryFn: async () => {
      if (!userSn) throw new Error('Invalid userSn ID');
      return await getUser(userSn);
    },
    enabled: !!userSn, // userSn이 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 신선하게 유지
    refetchOnWindowFocus: false, // 포커스 시 다시 가져오기 방지
  });
};

export default useFetchMyInfo;
