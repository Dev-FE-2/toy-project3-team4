import { Link } from 'react-router-dom';
import {
  RiBookmarkLine,
  RiChat1Line,
  RiShareLine,
  RiBillLine,
  RiBookmarkFill,
} from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import { useFetchMyUserInfo, useCopyToClipboard } from '@/hooks';
import { LikeButton } from '@/components';
import * as S from './InteractionBar.styles';

interface IInteractionBar {
  playlistSn: string;
}

const InteractionBar = ({ playlistSn }: IInteractionBar) => {
  const { data: myUserInfo } = useFetchMyUserInfo();
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <S.InteractionBar>
      <LikeButton playlistSn={playlistSn} />
      <Link to="/">
        <RiBillLine size={FEED_ICON_SIZE} />
      </Link>
      <Link to="/">
        <RiChat1Line size={FEED_ICON_SIZE} />
      </Link>
      <button type="button" onClick={() => copyToClipboard('복사')}>
        <RiShareLine size={FEED_ICON_SIZE} />
      </button>
      <div className="position-right">
        {playlistSn && myUserInfo?.bookmarks?.includes(playlistSn)}
        {playlistSn && myUserInfo?.bookmarks?.includes(playlistSn) ? (
          <RiBookmarkFill size={FEED_ICON_SIZE} />
        ) : (
          <RiBookmarkLine size={FEED_ICON_SIZE} />
        )}
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
