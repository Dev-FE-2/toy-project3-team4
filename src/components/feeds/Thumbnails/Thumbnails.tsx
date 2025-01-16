import { RiYoutubeFill } from 'react-icons/ri';
import * as S from './Thumbnails.styles';

interface IThumbnails {
  thumbnailUrl: string;
}

const Thumbnails = ({ thumbnailUrl }: IThumbnails) => {
  return (
    <S.Thumbnails to="/">
      <S.Thumbnail>
        <img src={thumbnailUrl} alt="" />
      </S.Thumbnail>
      <div className="thumb-hover">
        <RiYoutubeFill size="10rem" />
        <div className="bg-opacity"></div>
      </div>
    </S.Thumbnails>
  );
};

export default Thumbnails;
