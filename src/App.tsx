import AppRoutes from '@/routes/AppRoutes';
import GlobalStyle from './GlobalStyle';
import { useAuthObserver } from './hooks';
import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/provider';

function App() {
  const { subscribeToAuthChanges } = useAuthObserver();

  // 로그인 상태 감지
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges();

    return () => unsubscribe();
  }, [subscribeToAuthChanges]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
