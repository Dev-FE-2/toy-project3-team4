import { RiListCheck } from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import { IconButton, IconLink } from '@/components';

interface IIndexButton {
  link?: string;
  onIndexView?: () => void;
}

const IndexButton = ({ link, onIndexView }: IIndexButton) => {
  if (onIndexView) {
    return (
      <IconButton
        onClick={onIndexView}
        aria-label="플레이리스트 재생 목록 보기"
      >
        <RiListCheck size={FEED_ICON_SIZE} />
      </IconButton>
    );
  }

  return (
    <IconLink to={link!} aria-label="플레이리스트 재생 목록 보기">
      <RiListCheck size={FEED_ICON_SIZE} />
    </IconLink>
  );
};

export default IndexButton;
