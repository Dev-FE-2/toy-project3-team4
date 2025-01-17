import { useFetchAllPlaylist } from '@/hooks';
import { LoaderWrapper, Feed } from '@/components';

const FeedList = () => {
  const { data: feedList, isLoading, isError, error } = useFetchAllPlaylist();

  if (isError) return <div>오류 발생: {error?.message}</div>;

  return (
    <LoaderWrapper isLoading={isLoading} text="로딩 중...">
      <ul>
        {feedList ? (
          feedList.map((feed, index) => (
            <li key={`${index}-${feed.playlistSn}`}>
              <Feed
                userSn={feed.userSn}
                title={feed.title}
                content={feed.content}
                likes={feed.likes}
                comments={feed.comments}
                hashTags={feed.hashTags}
                thumbnailUrl={feed.thumbnailUrl}
                links={feed.links}
              />
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
