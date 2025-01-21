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
}

const InteractionBar = ({ playlistSn, detailViewLinks }: IInteractionBar) => {
  return (
    <S.InteractionBar>
      <LikeButton playlistSn={playlistSn} />
      <IndexViewButton link={detailViewLinks.indexView} />
      <CommentViewButton link={detailViewLinks.commentView} />
      <ShareButton link={detailViewLinks.default} />
      <div className="position-right">
        <BookmarkButton playlistSn={playlistSn} />
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
