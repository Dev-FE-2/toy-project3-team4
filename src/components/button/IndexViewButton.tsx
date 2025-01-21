import { RiBillLine } from 'react-icons/ri';
import { FEED_ICON_SIZE, QUERY_PARAMS } from '@/constant';
import { IconLink } from '@/components';

interface IIndexButton {
  link: string;
}

const IndexButton = ({ link }: IIndexButton) => {
  return (
    <IconLink
      to={link + `&${QUERY_PARAMS.PLAYLIST_INDEX}=true`}
      aria-label="플레이리스트 재생 목록 보기"
    >
      <RiBillLine size={FEED_ICON_SIZE} />
    </IconLink>
  );
};

export default IndexButton;
