import { RiVimeoFill, RiYoutubeLine } from 'react-icons/ri';
import { formatDate } from '@/utils';
import type { Video } from '@/types';
import { ProfileImage } from '@/components';
import * as S from './VideoInfo.styles';

const VideoInfo = ({ video }: { video: Video }) => {
  return (
    <S.VideoInfoBox>
      <div>
        <ProfileImage size="3rem" imageUrl={video.authorImgUrl} />
        <div>
          <S.VideoTitle>{video.title}</S.VideoTitle>
          <S.VideoSubInfo>
            {video.author} · {formatDate(video.publishedAt)}
          </S.VideoSubInfo>
        </div>
      </div>
      <div>
        {video.platform === 'youtube' ? (
          <RiYoutubeLine size={30} color="red" />
        ) : (
          <RiVimeoFill size={30} color="#17D5FF" />
        )}
      </div>
    </S.VideoInfoBox>
  );
};

export default VideoInfo;
