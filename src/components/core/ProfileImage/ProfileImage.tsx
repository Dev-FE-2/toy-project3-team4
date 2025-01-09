import { Link } from 'react-router-dom';
import * as S from './ProfileImage.styles';
import defaultImage from '../../../assets/avatar.svg';

interface ProfileImageProps {
  width: string;
  link?: string;
}

const ProfileImage = ({ width, link }: ProfileImageProps) => {
  const profileImage = (
    <S.ProfileImage $width={width}>
      <img src={defaultImage} alt="PETMOMENT" />
    </S.ProfileImage>
  );

  return link ? <Link to={link}>{profileImage}</Link> : profileImage;
};

export default ProfileImage;
