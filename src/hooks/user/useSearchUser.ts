import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import { searchUser } from '@/api';
import { IUserAPISchema } from '@/types';

const useSearchUser = (keyword: string, count: number) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['searchUser', keyword] });
  }, [keyword, queryClient]);

  return useInfiniteQuery<
    IUserAPISchema[],
    Error,
    InfiniteData<IUserAPISchema[]>,
    ['searchUser', string],
    string | undefined
  >({
    queryKey: ['searchUser', keyword],
    queryFn: ({ pageParam }) => {
      return searchUser(keyword, count, pageParam);
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.length < count) return undefined;
      return lastPage[lastPage.length - 1].userSn ?? undefined;
    },
    initialPageParam: undefined,
    enabled: !!keyword,
  });
};

export default useSearchUser;
