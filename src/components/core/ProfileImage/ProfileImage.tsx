import * as S from './ProfileImage.styles';

interface ProfileImageProps {
  imageUrl: string;
  size: string;
  isBorder?: boolean;
}

const ProfileImage = ({ imageUrl, size, isBorder }: ProfileImageProps) => {
  return (
    <S.ProfileImage $size={size} $isBorder={isBorder}>
      <img src={imageUrl} alt="" />
    </S.ProfileImage>
  );
};

export default ProfileImage;
