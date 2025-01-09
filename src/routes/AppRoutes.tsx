import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { routeConfig } from './routeConfig';

function Router() {
  // 전체 경로 구성
  const routes: RouteObject[] = routeConfig;

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
}

export default Router;
