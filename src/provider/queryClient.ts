import { QueryClient } from '@tanstack/react-query';

const INTERVAL_TIME = 1000 * 60 * 10; // 10분

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: INTERVAL_TIME,
      gcTime: INTERVAL_TIME,
      refetchOnReconnect: true,
      refetchInterval: INTERVAL_TIME,
    },
  },
});

export default queryClient;
