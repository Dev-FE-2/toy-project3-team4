import { VideoList } from '@/components';
import type { Video } from '@/types';
import * as S from '@/pages/PlaylistViewPage/PlaylistViewPage.styles';

interface PlaylistSectionProps {
  videos: Video[];
  onVideoClick: (idx: number) => void;
}

const PlaylistSection = ({ videos, onVideoClick }: PlaylistSectionProps) => {
  return (
    <S.SectionWrapper>
      <S.SectionTitle>플레이리스트 재생 목록</S.SectionTitle>

      <VideoList videos={videos} onClickItem={onVideoClick} />
    </S.SectionWrapper>
  );
};

export default PlaylistSection;
