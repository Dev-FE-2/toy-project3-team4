import {
  LikeButton,
  BookmarkButton,
  IndexViewButton,
  CommentViewButton,
  ShareButton,
} from '@/components';
import * as S from './InteractionBar.styles';

type detailViewLinksType = {
  default: string;
  infoView: string;
  indexView: string;
  commentView: string;
};
interface IInteractionBar {
  playlistSn: string;
  detailViewLinks: detailViewLinksType;
  myBookmarks: string[];
  likes: string[];
}

const InteractionBar = ({
  playlistSn,
  detailViewLinks,
  myBookmarks,
  likes,
}: IInteractionBar) => {
  return (
    <S.InteractionBar>
      <LikeButton playlistSn={playlistSn} likes={likes} />
      <IndexViewButton link={detailViewLinks.indexView} />
      <CommentViewButton link={detailViewLinks.commentView} />
      <ShareButton link={detailViewLinks.default} />
      <div className="position-right">
        <BookmarkButton playlistSn={playlistSn} myBookmarks={myBookmarks} />
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
