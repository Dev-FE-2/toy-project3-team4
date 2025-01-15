import AppRoutes from '@/routes/AppRoutes';
import GlobalStyle from './GlobalStyle';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/provider';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
