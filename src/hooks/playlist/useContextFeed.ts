import { useContext } from 'react';
import { FeedListContext } from '@/context';
import type { IPlaylistAPISchema } from '@/types';

const useContextFeed = (playlistSn: string) => {
  const context = useContext(FeedListContext);

  if (!context)
    throw new Error(
      'FeedListContext가 설정되지 않았습니다. FeedListProvider를 상위 컴포넌트에서 래핑했는지 확인하세요.',
    );

  const { feedList, myBookmarks, updateLikes, updateMyBookmarks } = context;
  const feed = feedList.find(
    (feed: IPlaylistAPISchema) => feed.playlistSn === playlistSn,
  );

  if (!feed)
    throw new Error(
      '해당 피드를 찾을 수 없습니다. 피드가 존재하는지 확인하세요.',
    );

  return { feed, myBookmarks, updateLikes, updateMyBookmarks };
};

export default useContextFeed;
