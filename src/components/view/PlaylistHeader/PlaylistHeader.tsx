import {
  BookmarkButton,
  CommentViewButton,
  IndexViewButton,
  LikeButton,
  LoaderWrapper,
  ShareButton,
} from '@/components';
import { useFetchMyUserInfo } from '@/hooks';
import { QUERY_PARAMS, URL } from '@/constant';
import type { IUserAPISchema } from '@/types';
import { PlaylistInfo } from '../PlaylistInfo';
import * as S from './PlaylistHeader.styles';

interface PlaylistHeaderProps {
  playlistSn: string;
  playlistTitle: string;
  author?: IUserAPISchema | null;
  likes: string[];
  onToggleView: (type: string) => void;
}

const PlaylistHeader = ({
  playlistTitle,
  playlistSn,
  author,
  likes,
  onToggleView,
}: PlaylistHeaderProps) => {
  const detailViewLinks = {
    default:
      URL.VIEWPLI.link +
      `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}&${QUERY_PARAMS.VIDEO_INDEX}=0`,
  };

  const {
    data: myInfo,
    isLoading: isMyInfoLoading,
    isError: isMyInfoError,
  } = useFetchMyUserInfo();

  return (
    <LoaderWrapper isLoading={isMyInfoLoading}>
      <PlaylistInfo author={author} playlistTitle={playlistTitle} />
      <S.InteractionBar>
        <LikeButton playlistSn={playlistSn} likes={likes} />
        <IndexViewButton onIndexView={() => onToggleView('playlist')} />
        <CommentViewButton onCommentView={() => onToggleView('comments')} />
        <ShareButton link={detailViewLinks.default} />
        {!isMyInfoError && (
          <div className="position-right">
            <BookmarkButton
              playlistSn={playlistSn}
              myBookmarks={myInfo?.bookmarks || []}
            />
          </div>
        )}
      </S.InteractionBar>
    </LoaderWrapper>
  );
};

export default PlaylistHeader;
