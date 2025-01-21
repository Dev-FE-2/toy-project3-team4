import { createContext, Dispatch, SetStateAction } from 'react';
import type { IPlaylistAPISchema, MyBookmarksType } from '@/types';

interface IFeedListContext {
  feedList: IPlaylistAPISchema[];
  myBookmarks: MyBookmarksType;
  setFeedList: Dispatch<SetStateAction<IPlaylistAPISchema[]>>;
  setMyBookmarkList: Dispatch<SetStateAction<MyBookmarksType>>;
  updateLikes: (playlistSn: string, newLikes: string[]) => void;
  updateMyBookmarks: (bookmarks: MyBookmarksType) => void;
}

const FeedListContext = createContext<IFeedListContext | undefined>(undefined);

export default FeedListContext;
