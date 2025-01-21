import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import {
  useFetchMyUserInfo,
  useUpdateMyBookmarks,
  useContextFeed,
} from '@/hooks';
import { IconButton } from '@/components';

interface ILikeButton {
  playlistSn: string;
}

const BookmarkButton = ({ playlistSn }: ILikeButton) => {
  const { data: myInfo } = useFetchMyUserInfo();
  const { myBookmarks } = useContextFeed(playlistSn);
  const { mutate: updateBookmarks } = useUpdateMyBookmarks(playlistSn);

  const addBookmarkPli = () => {
    if (!myInfo) {
      alert('로그인을 진행해주세요!');
      return;
    }

    const newBookmarks = [...(myBookmarks || []), playlistSn];
    updateBookmarks({ newBookmarks });
  };

  const removeBookmarkPli = () => {
    const newBookmarks =
      myBookmarks?.filter((bookmark) => bookmark !== playlistSn) || [];
    updateBookmarks({ newBookmarks });
  };

  return playlistSn && myBookmarks.includes(playlistSn) ? (
    <IconButton
      type="button"
      onClick={removeBookmarkPli}
      aria-label="플레이리스트 구독 취소하기"
    >
      <RiBookmarkFill size={FEED_ICON_SIZE} />
    </IconButton>
  ) : (
    <IconButton
      type="button"
      onClick={addBookmarkPli}
      aria-label="플레이리스트 구독하기"
    >
      <RiBookmarkLine size={FEED_ICON_SIZE} />
    </IconButton>
  );
};

export default BookmarkButton;
