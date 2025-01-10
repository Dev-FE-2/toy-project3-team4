import { Link } from 'react-router-dom';
import * as S from './ProfileImage.styles';
import defaultImage from '@/assets/avatar.svg';

interface ProfileImageProps {
  width: string;
  link?: string;
  isBorder?: boolean;
}

const ProfileImage = ({ width, link, isBorder }: ProfileImageProps) => {
  const profileImage = (
    <S.ProfileImage $width={width} $isBorder={isBorder}>
      <img src={defaultImage} alt="사용자 프로필 사진" />
    </S.ProfileImage>
  );

  return link ? <Link to={link}>{profileImage}</Link> : profileImage;
};

export default ProfileImage;
