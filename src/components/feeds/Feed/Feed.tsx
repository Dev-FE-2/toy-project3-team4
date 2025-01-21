import { Link } from 'react-router-dom';
import { RiMoreFill } from 'react-icons/ri';
import { useFetchAuthor, useContextFeed } from '@/hooks';
import { ProfileImage, TagList } from '@/components';
import { Thumbnails, InteractionBar } from '@/components/feeds';
import * as S from './Feed.styles';
import defaultImage from '@/assets/avatar.svg';

const Feed = ({ playlistSn }: { playlistSn: string }) => {
  const { feed } = useContextFeed(playlistSn);
  const {
    userSn,
    title,
    content,
    likes,
    comments,
    hashTags,
    thumbnailUrl,
    links,
  } = feed;
  const { data: author } = useFetchAuthor(userSn);
  const videoLink = links[0];

  return (
    <S.Feed>
      <S.FeedHeader>
        <S.AuthorInfo to={videoLink}>
          <ProfileImage size="3rem" imageUrl={author?.imgUrl || defaultImage} />
          {author?.name}
        </S.AuthorInfo>
        <RiMoreFill size="1.6rem" />
      </S.FeedHeader>
      <S.FeedBody>
        <Thumbnails thumbnailUrl={thumbnailUrl} />
        <InteractionBar playlistSn={playlistSn} />
        <S.FeedInfo>
          <div className="likes-info">좋아요 {likes.length}개</div>
          <div>
            <h4 className="feed-title">{title}</h4>
            <div className="feed-des">{content}</div>
          </div>
          {hashTags.length > 0 ? (
            <TagList tags={hashTags} tagType="text" gap={0.4} />
          ) : (
            <></>
          )}
          <Link to={videoLink} className="comments-info">
            {comments.length > 0 ? (
              <>댓글 {comments.length}개 모두 보기</>
            ) : (
              <>댓글 달기</>
            )}
          </Link>
        </S.FeedInfo>
      </S.FeedBody>
    </S.Feed>
  );
};

export default Feed;
