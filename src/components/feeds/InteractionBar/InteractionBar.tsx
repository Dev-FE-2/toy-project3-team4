import { Link } from 'react-router-dom';
import {
  RiBookmarkLine,
  RiChat1Line,
  RiShareLine,
  RiBillLine,
  RiBookmarkFill,
} from 'react-icons/ri';
import { useUserSn } from '@/store';
import { useFetchMyUserInfo, useCopyToClipboard } from '@/hooks';
import { LikeButton } from '@/components';
import * as S from './InteractionBar.styles';

const ICON_SIZE = '2.4rem';

interface IInteractionBar {
  playlistSn: string;
  likes: string[];
}

const InteractionBar = ({ playlistSn, likes }: IInteractionBar) => {
  const userSn = useUserSn();
  const { data: myUserInfo } = useFetchMyUserInfo();
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <S.InteractionBar>
      <LikeButton myuserSn={userSn} likes={likes} iconSize={ICON_SIZE} />
      <Link to="/">
        <RiBillLine size={ICON_SIZE} />
      </Link>
      <Link to="/">
        <RiChat1Line size={ICON_SIZE} />
      </Link>
      <button type="button" onClick={() => copyToClipboard('복사')}>
        <RiShareLine size={ICON_SIZE} />
      </button>
      <div className="position-right">
        {playlistSn && myUserInfo?.bookmarks?.includes(playlistSn)}
        {playlistSn && myUserInfo?.bookmarks?.includes(playlistSn) ? (
          <RiBookmarkFill size={ICON_SIZE} />
        ) : (
          <RiBookmarkLine size={ICON_SIZE} />
        )}
      </div>
    </S.InteractionBar>
  );
};

export default InteractionBar;
