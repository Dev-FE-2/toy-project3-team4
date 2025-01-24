import { CommentViewButton, IndexViewButton, ShareButton } from '@/components';
import { QUERY_PARAMS, URL } from '@/constant';
import type { IUserAPISchema } from '@/types';
import { PlaylistInfo } from '../PlaylistInfo';
import * as S from './PlaylistHeader.styles';

interface PlaylistHeaderProps {
  playlistSn: string;
  playlistTitle: string;
  author?: IUserAPISchema | null;
  onToggleView: (type: string) => void;
}

const PlaylistHeader = ({
  playlistTitle,
  playlistSn,
  author,
  onToggleView,
}: PlaylistHeaderProps) => {
  const detailViewLinks = {
    default:
      URL.VIEWPLI.link +
      `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}&${QUERY_PARAMS.VIDEO_INDEX}=0`,
  };

  return (
    <>
      <PlaylistInfo author={author} playlistTitle={playlistTitle} />
      <S.InteractionBar>
        {/* <LikeButton playlistSn={playlistSn} /> */}
        <IndexViewButton onIndexView={() => onToggleView('playlist')} />
        <CommentViewButton onCommentView={() => onToggleView('comments')} />
        <ShareButton link={detailViewLinks.default} />
        {/* <div className="position-right">
              <BookmarkButton playlistSn={playlistSn} />
            </div> */}
      </S.InteractionBar>
    </>
  );
};

export default PlaylistHeader;
