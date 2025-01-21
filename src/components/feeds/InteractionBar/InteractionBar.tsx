import { RiShareLine } from 'react-icons/ri';
import { URL, QUERY_PARAMS, FEED_ICON_SIZE } from '@/constant';
import { useCopyToClipboard } from '@/hooks';
import {
  LikeButton,
  BookmarkButton,
  IndexViewButton,
  CommentViewButton,
} from '@/components';
import * as S from './InteractionBar.styles';

interface IInteractionBar {
  playlistSn: string;
}

const InteractionBar = ({ playlistSn }: IInteractionBar) => {
  const { copyToClipboard } = useCopyToClipboard();
  const link = URL.VIEWPLI.link + `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}`;

  return (
    <S.InteractionBar>
      <LikeButton playlistSn={playlistSn} />
      <IndexViewButton link={link} />
      <CommentViewButton link={link} />
      <button type="button" onClick={() => copyToClipboard('복사')}>
        <RiShareLine size={FEED_ICON_SIZE} />
      </button>
      <div className="position-right">
        <BookmarkButton playlistSn={playlistSn} />
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
