import { useLocation } from 'react-router-dom';
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
import { MyProfileImage } from '@/components';
import * as S from './NavMenu.styles';

type MenuProps = {
  iconName: string;
  text?: string;
  size: string;
  linkForActive?: string;
};

const NavMenu = ({ iconName, text, size, linkForActive }: MenuProps) => {
  const { pathname } = useLocation();

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
        icon: <MyProfileImage size={size} />,
        activeIcon: <MyProfileImage size={size} isBorder />,
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

  const iconInfo = navIcons.get(iconName);

  return (
    <S.NavMenu>
      {pathname === linkForActive ? iconInfo?.activeIcon : iconInfo?.icon}
      {text ? <span>{text}</span> : ''}
    </S.NavMenu>
  );
};

export default NavMenu;
