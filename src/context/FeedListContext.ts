import { createContext, Dispatch, SetStateAction } from 'react';
import type { IPlaylistAPISchema } from '@/types';

interface IFeedListContext {
  feedList: IPlaylistAPISchema[];
  setFeedList: Dispatch<SetStateAction<IPlaylistAPISchema[]>>;
  updateLikes: (playlistSn: string, newLikes: string[]) => void;
}

const FeedListContext = createContext<IFeedListContext | undefined>(undefined);

export default FeedListContext;
