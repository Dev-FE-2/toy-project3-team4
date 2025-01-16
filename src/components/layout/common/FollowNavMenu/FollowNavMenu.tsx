import { NAV_ICON_SIZE } from '@/constant';
import { ProfileImage } from '@/components';
import * as S from './FollowNavMenu.styles';

interface MenuProps {
  username: string;
  imageUrl: string;
}

const FollowNavMenu = ({ username, imageUrl }: MenuProps) => {
  return (
    <S.NavMenu>
      <ProfileImage size={NAV_ICON_SIZE} imageUrl={imageUrl} />
      {username}
    </S.NavMenu>
  );
};

export default FollowNavMenu;
