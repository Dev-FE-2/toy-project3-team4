import { useUserImg } from '@/store';
import { ProfileImage } from '@/components';
import defaultImage from '@/assets/avatar.svg';

interface ProfileImageProps {
  size: string;
  isBorder?: boolean;
}

const MyProfileImage = ({ size, isBorder }: ProfileImageProps) => {
  const userPhoto = useUserImg();

  return (
    <ProfileImage
      imageUrl={userPhoto || defaultImage}
      size={size}
      isBorder={isBorder}
    />
  );
};

export default MyProfileImage;
