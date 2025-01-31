import { QueryClient } from '@tanstack/react-query';
import { INTERVAL_TIME } from '@/constant';

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
