import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import { updateUser } from '@/api';
import { useFetchMyUserInfo } from '@/hooks';

interface ILikeButton {
  myuserSn?: string;
  likes: string[];
  iconSize: string;
}

const LikeButton = ({ myuserSn, likes, iconSize }: ILikeButton) => {
  const { data: myUserInfo } = useFetchMyUserInfo();

  const addLikePli = () => {
    if (myuserSn) {
      updateUser(myuserSn, {
        ...myUserInfo,
      });
    } else {
      alert('로그인을 진행해주세요!');
    }
  };

  const removeLikePli = () => {};

  return myuserSn && likes.includes(myuserSn) ? (
    <button type="button" onClick={addLikePli}>
      <RiHeart3Fill size={iconSize} />
    </button>
  ) : (
    <button type="button" onClick={removeLikePli}>
      <RiHeart3Line size={iconSize} />
    </button>
  );
};

export default LikeButton;
