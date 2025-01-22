import { RiShareLine } from 'react-icons/ri';
import { FEED_ICON_SIZE } from '@/constant';
import { useCopyToClipboard } from '@/hooks';
import { IconButton } from '@/components';

interface IShareButton {
  link: string;
}

const ShareButton = ({ link }: IShareButton) => {
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <IconButton
      type="button"
      onClick={() => copyToClipboard(window.location.host + link)}
    >
      <RiShareLine size={FEED_ICON_SIZE} />
    </IconButton>
  );
};

export default ShareButton;
