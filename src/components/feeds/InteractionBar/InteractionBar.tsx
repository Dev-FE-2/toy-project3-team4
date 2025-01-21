import { URL, QUERY_PARAMS } from '@/constant';
import {
  LikeButton,
  BookmarkButton,
  IndexViewButton,
  CommentViewButton,
  ShareButton,
} from '@/components';
import * as S from './InteractionBar.styles';

interface IInteractionBar {
  playlistSn: string;
}

const InteractionBar = ({ playlistSn }: IInteractionBar) => {
  const link = URL.VIEWPLI.link + `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}`;

  return (
    <S.InteractionBar>
      <LikeButton playlistSn={playlistSn} />
      <IndexViewButton link={link} />
      <CommentViewButton link={link} />
      <ShareButton link={link} />
      <div className="position-right">
        <BookmarkButton playlistSn={playlistSn} />
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
