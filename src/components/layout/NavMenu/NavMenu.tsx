import {
  RiHome4Line,
  RiHome4Fill,
  RiSearchLine,
  RiSearchFill,
  RiUserFollowLine,
  RiUserFollowFill,
  RiAddCircleLine,
  RiAddCircleFill,
  RiUserSettingsLine,
  RiUserSettingsFill,
  RiVipDiamondLine,
  RiVipDiamondFill,
  RiMenuFill,
} from 'react-icons/ri';
import { ProfileImage } from '@/components';
import * as S from './NavMenu.style';

const NavMenu = ({
  icon,
  text,
  size,
}: {
  icon: string;
  text?: string;
  size: string;
}) => {
  const navIcons = new Map([
    [
      'home',
      {
        icon: <RiHome4Line size={size} />,
        activeIcon: <RiHome4Fill size={size} />,
      },
    ],
    [
      'search',
      {
        icon: <RiSearchLine size={size} />,
        activeIcon: <RiSearchFill size={size} />,
      },
    ],
    [
      'followpli',
      {
        icon: <RiUserFollowLine size={size} />,
        activeIcon: <RiUserFollowFill size={size} />,
      },
    ],
    [
      'insertpli',
      {
        icon: <RiAddCircleLine size={size} />,
        activeIcon: <RiAddCircleFill size={size} />,
      },
    ],
    [
      'profile',
      {
        icon: <ProfileImage width={size} />,
        activeIcon: <ProfileImage width={size} isBorder />,
      },
    ],
    [
      'userinfo',
      {
        icon: <RiUserSettingsLine size={size} />,
        activeIcon: <RiUserSettingsFill size={size} />,
      },
    ],
    [
      'interests',
      {
        icon: <RiVipDiamondLine size={size} />,
        activeIcon: <RiVipDiamondFill size={size} />,
      },
    ],
    [
      'menu',
      {
        icon: <RiMenuFill size={size} />,
      },
    ],
  ]);

  return (
    <S.NavMenu>
      {text ? (
        <>
          {navIcons.get(icon)?.icon} <span>{text}</span>
        </>
      ) : (
        <>{navIcons.get(icon)?.icon}</>
      )}
    </S.NavMenu>
  );
};

export default NavMenu;
