import { RiChat1Line } from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import { IconButton, IconLink } from '@/components';

interface ICommentViewButton {
  link?: string;
  onCommentView?: () => void;
}

const CommentViewButton = ({ link, onCommentView }: ICommentViewButton) => {
  if (onCommentView) {
    return (
      <IconButton
        onClick={onCommentView}
        aria-label="플레이리스트 재생 목록 보기"
      >
        <RiChat1Line size={FEED_ICON_SIZE} />
      </IconButton>
    );
  }

  return (
    <IconLink to={link!} aria-label="플레이리스트 댓글 보기">
      <RiChat1Line size={FEED_ICON_SIZE} />
    </IconLink>
  );
};

export default CommentViewButton;
