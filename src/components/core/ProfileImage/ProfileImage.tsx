import * as S from './ProfileImage.styles';

interface ProfileImageProps {
  imageUrl: string;
  size: string;
  isBorder?: boolean;
}

const ProfileImage = ({ imageUrl, size, isBorder }: ProfileImageProps) => {
  return (
    <S.ProfileImage $size={size} $isBorder={isBorder}>
      <img src={imageUrl} alt="사용자 프로필 사진" />
    </S.ProfileImage>
  );
};

export default ProfileImage;
