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

  return (
    <FeedListContext.Provider value={{ feedList, setFeedList }}>
      {children}
    </FeedListContext.Provider>
  );
};

export default FeedListProvider;
