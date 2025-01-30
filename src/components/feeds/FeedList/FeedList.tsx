import { useFetchAllPlaylist } from '@/hooks';
import { FeedListProvider } from '@/provider';
import { useFetchMyUserInfo } from '@/hooks';
import { LoaderWrapper, Feed } from '@/components';

const FeedList = () => {
  const {
    data: feedList,
    isLoading: isFeedLoading,
    isError: isFeedError,
    error: feedError,
  } = useFetchAllPlaylist();
  const {
    data: myInfo,
    isLoading: isMyInfoLoading,
    isError: isMyInfoError,
    error: myInfoError,
  } = useFetchMyUserInfo();

  if (isFeedError) return <div>오류 발생: {feedError?.message}</div>;
  if (isMyInfoError) return <div>오류 발생: {myInfoError?.message}</div>;

  return (
    <LoaderWrapper
      isLoading={isFeedLoading || isMyInfoLoading}
      text="로딩 중..."
    >
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
