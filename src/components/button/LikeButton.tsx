import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import { updateUser } from '@/api';
import { useUserSn } from '@/store';
import { FEED_ICON_SIZE } from '@/constant';
import { useFetchMyUserInfo, useContextFeed } from '@/hooks';

interface ILikeButton {
  playlistSn: string;
}

const LikeButton = ({ playlistSn }: ILikeButton) => {
  const { likes } = useContextFeed(playlistSn);
  const userSn = useUserSn();
  const { data: myUserInfo } = useFetchMyUserInfo();

  const addLikePli = () => {
    if (userSn) {
      updateUser(userSn, {
        ...myUserInfo,
      });
    } else {
      alert('로그인을 진행해주세요!');
    }
  };

  const removeLikePli = () => {};

  return userSn && likes.includes(userSn) ? (
    <button type="button" onClick={addLikePli}>
      <RiHeart3Fill size={FEED_ICON_SIZE} />
    </button>
  ) : (
    <button type="button" onClick={removeLikePli}>
      <RiHeart3Line size={FEED_ICON_SIZE} />
    </button>
  );
};

export default LikeButton;
