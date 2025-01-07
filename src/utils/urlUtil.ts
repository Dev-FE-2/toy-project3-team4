import { URL, URLName } from '@/constant';
import { RouteObject } from 'react-router-dom';

interface ChlidRoutesParam {
  name: URLName;
  element: React.ReactNode;
}

export const getURL = (key: URLName) => URL[key];
export const getURLLink = (key: URLName) => URL[key].link;
export const getURLText = (key: URLName) => URL[key].text;

export const generateChildRoutes = (
  paths: ChlidRoutesParam[],
): RouteObject[] => {
  return paths.map(({ name, element }) => ({
    path: getURLLink(name),
    element,
  }));
};
