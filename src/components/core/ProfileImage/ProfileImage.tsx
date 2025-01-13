import * as S from './ProfileImage.styles';
import defaultImage from '@/assets/avatar.svg';
import { useUserImg } from '@/store';

interface ProfileImageProps {
  size: string;
  isBorder?: boolean;
}

const ProfileImage = ({ size, isBorder }: ProfileImageProps) => {
  const userPhoto = useUserImg();

  return (
    <S.ProfileImage $size={size} $isBorder={isBorder}>
      <img src={userPhoto || defaultImage} alt="사용자 프로필 사진" />
    </S.ProfileImage>
  );
};

export default ProfileImage;
