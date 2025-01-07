import { URL, URLName } from '@/constant';

export const getURL = (key: URLName) => URL[key];
export const getURLLink = (key: URLName) => URL[key].link;
export const getURLText = (key: URLName) => URL[key].text;
