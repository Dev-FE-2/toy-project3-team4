import * as S from './RoundImage.styles';

interface RoundImageProps {
  size: string;
  isBorder?: boolean;
  imgUrl: string;
}

const RoundImage = ({ size, isBorder, imgUrl }: RoundImageProps) => {
  return (
    <S.RoundImage $size={size} $isBorder={isBorder}>
      <img src={imgUrl} alt="사용자 프로필 사진" />
    </S.RoundImage>
  );
};

export default RoundImage;
