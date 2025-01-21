import { useContext } from 'react';
import { useFetchAllPlaylist } from '@/hooks';
import { FeedListContext } from '@/context';
import { FeedListProvider } from '@/provider';
import { LoaderWrapper, Feed } from '@/components';

const FeedList = () => {
  const context = useContext(FeedListContext);
  const { data: feedList, isLoading, isError, error } = useFetchAllPlaylist();

  if (!context)
    throw new Error(
      'FeedListContext가 설정되지 않았습니다. 해당 컴포넌트가 FeedListProvider로 감싸져 있는지 확인하세요.',
    );
  if (isError) return <div>오류 발생: {error?.message}</div>;

  return (
    <LoaderWrapper isLoading={isLoading} text="로딩 중...">
      <FeedListProvider initialFeedList={feedList || []}>
        <ul>
          {feedList && feedList.length > 0 ? (
            feedList.map((feed, index) => (
              <li key={`${index}-${feed.playlistSn}`}>
                <Feed playlistSn={feed.playlistSn} />
              </li>
            ))
          ) : (
            <div>no data</div>
          )}
        </ul>
      </FeedListProvider>
    </LoaderWrapper>
  );
};

export default FeedList;
