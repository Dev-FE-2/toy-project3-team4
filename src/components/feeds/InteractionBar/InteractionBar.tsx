import { Link } from 'react-router-dom';
import { RiChat1Line, RiShareLine, RiBillLine } from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import { useCopyToClipboard } from '@/hooks';
import { LikeButton, BookmarkButton } from '@/components';
import * as S from './InteractionBar.styles';

interface IInteractionBar {
  playlistSn: string;
}

const InteractionBar = ({ playlistSn }: IInteractionBar) => {
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
        <BookmarkButton playlistSn={playlistSn} />
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
