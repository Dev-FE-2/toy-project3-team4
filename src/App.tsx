import AppRoutes from '@/routes/AppRoutes';
import GlobalStyle from './GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/provider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
