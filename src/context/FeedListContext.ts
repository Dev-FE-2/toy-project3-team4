import { createContext, Dispatch, SetStateAction } from 'react';
import type { IPlaylistAPISchema } from '@/types';

interface IFeedListContext {
  feedList: IPlaylistAPISchema[];
  setFeedList: Dispatch<SetStateAction<IPlaylistAPISchema[]>>;
}

const FeedListContext = createContext<IFeedListContext | undefined>(undefined);

export default FeedListContext;
