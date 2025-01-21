import { ReactNode, useState } from 'react';
import { FeedListContext } from '@/context';
import type { IPlaylistAPISchema, MyBookmarksType } from '@/types';

interface IFeedListProvider {
  children: ReactNode;
  initialFeedList: IPlaylistAPISchema[];
  initialMyBookmarks: MyBookmarksType;
}

export const FeedListProvider = ({
  children,
  initialFeedList,
  initialMyBookmarks,
}: IFeedListProvider) => {
  const [feedList, setFeedList] =
    useState<IPlaylistAPISchema[]>(initialFeedList);
  const [myBookmarks, setMyBookmarkList] =
    useState<MyBookmarksType>(initialMyBookmarks);

  const updateLikes = (playlistSn: string, newLikes: string[]) => {
    setFeedList((prev) =>
      prev.map((feed) => {
        if (feed.playlistSn === playlistSn) {
          return { ...feed, likes: newLikes };
        }
        return feed;
      }),
    );
  };

  const updateMyBookmarks = (bookmarks: MyBookmarksType) => {
    setMyBookmarkList(bookmarks);
  };

  return (
    <FeedListContext.Provider
      value={{
        feedList,
        setFeedList,
        updateLikes,
        myBookmarks,
        setMyBookmarkList,
        updateMyBookmarks,
      }}
    >
      {children}
    </FeedListContext.Provider>
  );
};

export default FeedListProvider;
