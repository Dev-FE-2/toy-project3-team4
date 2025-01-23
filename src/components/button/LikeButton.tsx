import { useNavigate } from 'react-router-dom';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import { useUserSn } from '@/store';
import { FEED_ICON_SIZE, URL } from '@/constant';
import { useContextFeed, useUpdateLikes } from '@/hooks';
import { IconButton } from '@/components';

interface ILikeButton {
  playlistSn: string;
}

const LikeButton = ({ playlistSn }: ILikeButton) => {
  const navigation = useNavigate();
  const { feed } = useContextFeed(playlistSn);
  const { likes } = feed;
  const userSn = useUserSn();
  const { mutate: updateLikes } = useUpdateLikes(playlistSn);

  const addLikePli = () => {
    if (!userSn) {
      navigation(URL.SIGNIN.link);
      return;
    }

    const newLikes = [...likes, userSn];
    updateLikes({ playlistSn, newLikes });
  };

  const removeLikePli = () => {
    const newLikes = likes.filter((like) => like !== userSn);
    updateLikes({ playlistSn, newLikes });
  };

  return userSn && likes.includes(userSn) ? (
    <IconButton
      type="button"
      onClick={removeLikePli}
      aria-label="좋아요 취소하기"
    >
      <RiHeart3Fill size={FEED_ICON_SIZE} />
    </IconButton>
  ) : (
    <IconButton type="button" onClick={addLikePli} aria-label="좋아요 하기">
      <RiHeart3Line size={FEED_ICON_SIZE} />
    </IconButton>
  );
};

export default LikeButton;
