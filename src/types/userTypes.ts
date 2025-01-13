export interface IUser {
  userSn: string;
  email: string;
  name: string;
  description: string;
  imgUrl: string;
  interests: string[];
}

export interface IUserAPISchema extends IUser {
  likes: string[];
  followers: string[];
  followings: string[];
  myPlaylists: string[];
  bookmarks: string[];
}
