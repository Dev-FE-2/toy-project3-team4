import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import { useUserSn } from '@/store';
import { FEED_ICON_SIZE } from '@/constant';
import { useUpdatePlaylist, useContextFeed } from '@/hooks';

interface ILikeButton {
  playlistSn: string;
}

const LikeButton = ({ playlistSn }: ILikeButton) => {
  const { feed, updateLikes: updateLikesContext } = useContextFeed(playlistSn);
  const { likes } = feed;
  const userSn = useUserSn();
  const { mutate: updateLikesDB } = useUpdatePlaylist();

  const addLikePli = () => {
    if (!userSn) {
      alert('로그인을 진행해주세요!');
      return;
    }

    const newLikes = [...likes, userSn];

    updateLikesContext(playlistSn, newLikes);
    updateLikesDB(
      { playlistSn: playlistSn as string, updates: { likes: newLikes } },
      {
        onSuccess: () => {
          console.log('좋아요 추가 성공!');
          console.log('newLikes:', newLikes);
        },
        onError: () => {
          console.log('좋아요 추가 실패!');
        },
      },
    );
  };

  const removeLikePli = () => {
    const newLikes = likes.filter((like) => like !== userSn);

    updateLikesContext(playlistSn, newLikes);
    updateLikesDB(
      { playlistSn: playlistSn as string, updates: { likes: newLikes } },
      {
        onSuccess: () => {
          console.log('좋아요 취소 성공!');
          console.log('newLikes:', newLikes);
        },
        onError: () => {
          console.log('좋아요 취소 실패!');
        },
      },
    );
  };

  return userSn && likes.includes(userSn) ? (
    <button type="button" onClick={removeLikePli} aria-label="좋아요 취소하기">
      <RiHeart3Fill size={FEED_ICON_SIZE} />
    </button>
  ) : (
    <button type="button" onClick={addLikePli} aria-label="좋아요 하기">
      <RiHeart3Line size={FEED_ICON_SIZE} />
    </button>
  );
};

export default LikeButton;
