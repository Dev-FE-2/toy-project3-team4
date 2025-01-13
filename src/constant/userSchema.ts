import { IUserAPISchema } from '@/types';

export const defaultUserSchema: Omit<IUserAPISchema, 'userSn'> = {
  email: '',
  name: '',
  imgUrl: '',
  description: '',
  interests: [],
  likes: [],
  followers: [],
  followings: [],
  myPlaylists: [],
  bookmarks: [],
};
