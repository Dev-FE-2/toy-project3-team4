import { useFetchAllPlaylist } from '@/hooks';
import { FeedListProvider } from '@/provider';
import { useFetchMyUserInfo } from '@/hooks';
import { LoaderWrapper, Feed } from '@/components';

const FeedList = () => {
  const { data: feedList, isLoading, isError, error } = useFetchAllPlaylist();
  const { data: myInfo } = useFetchMyUserInfo();

  if (isError) return <div>오류 발생: {error?.message}</div>;

  return (
    <LoaderWrapper isLoading={isLoading} text="로딩 중...">
      <FeedListProvider
        initialFeedList={feedList || []}
        initialMyBookmarks={myInfo?.bookmarks || []}
      >
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
