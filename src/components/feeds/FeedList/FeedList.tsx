import { useFetchAllPlaylist } from '@/hooks';
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

  const latestFeedList = feedList
    ? [...feedList].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
    : [];

  return (
    <LoaderWrapper
      isLoading={isFeedLoading || isMyInfoLoading}
      text="로딩 중..."
    >
      <ul>
        {latestFeedList && latestFeedList.length > 0 ? (
          latestFeedList.map((feed, index) => (
            <li key={`${index}-${feed.playlistSn}`}>
              <Feed feed={feed} myBookmarks={myInfo?.bookmarks || []} />
            </li>
          ))
        ) : (
          <div>no data</div>
        )}
      </ul>
    </LoaderWrapper>
  );
};

export default FeedList;
