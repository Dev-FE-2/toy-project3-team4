import { ReactNode, useState } from 'react';
import { FeedListContext } from '@/context';
import type { IPlaylistAPISchema } from '@/types';

interface IFeedListProvider {
  children: ReactNode;
  initialFeedList: IPlaylistAPISchema[];
}

export const FeedListProvider = ({
  children,
  initialFeedList,
}: IFeedListProvider) => {
  const [feedList, setFeedList] =
    useState<IPlaylistAPISchema[]>(initialFeedList);

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

  return (
    <FeedListContext.Provider value={{ feedList, setFeedList, updateLikes }}>
      {children}
    </FeedListContext.Provider>
  );
};

export default FeedListProvider;
