import { RouteObject } from 'react-router-dom';
import { URLName } from '@/constant';
import { getURLLink } from './urlUtil';

interface ChlidRoutesParam {
  name: URLName;
  element: React.ReactNode;
}

export const generateChildRoutes = (
  paths: ChlidRoutesParam[],
): RouteObject[] => {
  return paths.map(({ name, element }) => ({
    path: getURLLink(name),
    element,
  }));
};
