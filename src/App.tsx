import AppRoutes from '@/routes/AppRoutes';
import GlobalStyle from './GlobalStyle';
import { useAuthObserver } from './hooks';
import { useEffect } from 'react';

function App() {
  const { subscribeToAuthChanges } = useAuthObserver();

  // 로그인 상태 감지
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges();

    return () => unsubscribe();
  }, [subscribeToAuthChanges]);

  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
