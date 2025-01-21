import { RiChat1Line } from 'react-icons/ri';
import { FEED_ICON_SIZE, QUERY_PARAMS } from '@/constant';
import { IconLink } from '@/components';

interface ICommentViewButton {
  link: string;
}

const CommentViewButton = ({ link }: ICommentViewButton) => {
  return (
    <IconLink
      to={link + `&${QUERY_PARAMS.PLAYLIST_COMMENTS}=true`}
      aria-label="플레이리스트 댓글 보기"
    >
      <RiChat1Line size={FEED_ICON_SIZE} />
    </IconLink>
  );
};

export default CommentViewButton;
