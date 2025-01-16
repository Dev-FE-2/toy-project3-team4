export interface IPlaylistAPISchema {
  playlistSn: string;
  userSn: string;
  title: string;
  content: string;
  likes: string[];
  comments: string[];
  date: string;
  disclosure: boolean;
  hashTags: string[];
  thumbnailUrl: string;
  links: string[];
}

export interface PlaylistFormData {
  title: string;
  content: string;
  disclosure: boolean;
}
