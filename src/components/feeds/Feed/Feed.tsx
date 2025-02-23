import { Link } from 'react-router-dom';
import { RiMoreFill } from 'react-icons/ri';
import { URL, QUERY_PARAMS, PATH_PARAMS } from '@/constant';
import { useFetchAuthor } from '@/hooks';
import { ProfileImage, TagList } from '@/components';
import type { IPlaylistAPISchema } from '@/types';
import { Thumbnails, InteractionBar } from '@/components/feeds';
import * as S from './Feed.styles';
import defaultImage from '@/assets/avatar.svg';

interface IFeed {
  feed: IPlaylistAPISchema;
  myBookmarks: string[];
}

const Feed = ({ feed, myBookmarks }: IFeed) => {
  const {
    playlistSn,
    userSn: authorSn,
    title,
    content,
    likes,
    comments,
    hashTags,
    thumbnailUrl,
    links,
  } = feed;
  const videoCount = links.length;
  const { data: author } = useFetchAuthor(authorSn);
  const link =
    URL.VIEWPLI.link +
    `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}&${QUERY_PARAMS.VIDEO_INDEX}=0`;
  const detailViewLinks = {
    default: link,
    infoView: link + `&${QUERY_PARAMS.PLAYLIST_INFO}=true`,
    indexView: link + `&${QUERY_PARAMS.PLAYLIST_INDEX}=true`,
    commentView: link + `&${QUERY_PARAMS.PLAYLIST_COMMENTS}=true`,
  };
  const authorProfileLink = URL.PROFILE.link.replace(
    PATH_PARAMS.USER_SN,
    authorSn,
  );

  return (
    <S.Feed>
      <S.FeedHeader>
        <S.AuthorInfo to={authorProfileLink}>
          <ProfileImage size="3rem" imageUrl={author?.imgUrl || defaultImage} />
          {author?.name}
        </S.AuthorInfo>
        <RiMoreFill size="1.6rem" />
      </S.FeedHeader>
      <S.FeedBody>
        <Thumbnails
          thumbnailUrl={thumbnailUrl}
          videoCount={videoCount}
          link={link}
        />
        <InteractionBar
          playlistSn={playlistSn}
          detailViewLinks={detailViewLinks}
          myBookmarks={myBookmarks}
          likes={likes}
        />
        <S.FeedInfo>
          <div className="likes-info">좋아요 {likes.length}개</div>
          <div>
            <Link to={link}>
              <h4 className="feed-title">{title}</h4>
            </Link>
            <Link to={detailViewLinks.infoView}>
              <div className="feed-des">{content}</div>
            </Link>
          </div>
          {hashTags.length > 0 ? (
            <TagList tags={hashTags} tagType="text" gap={0.4} />
          ) : (
            <></>
          )}
          <Link to={detailViewLinks.commentView} className="comments-info">
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
