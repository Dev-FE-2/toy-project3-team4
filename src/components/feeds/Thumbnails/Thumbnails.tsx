import { RiYoutubeFill, RiCheckboxMultipleBlankFill } from 'react-icons/ri';
import * as S from './Thumbnails.styles';

interface IThumbnails {
  videoCount: number;
  thumbnailUrl: string;
  link: string;
}

const Thumbnails = ({ thumbnailUrl, videoCount, link }: IThumbnails) => {
  return (
    <S.Thumbnails to={link}>
      <S.Thumbnail>
        <img src={thumbnailUrl} alt="" />
      </S.Thumbnail>
      <div className="multiple-flag">
        <RiCheckboxMultipleBlankFill />
        <span className="videoCount">{videoCount}개</span>
      </div>
      <div className="thumb-hover">
        <RiYoutubeFill size="10rem" />
        <div className="bg-opacity"></div>
      </div>
    </S.Thumbnails>
  );
};

export default Thumbnails;
