import { ProfileImage } from '@/components';
import type { IUserAPISchema } from '@/types';
import defaultImage from '@/assets/avatar.svg';
import * as S from './PlaylistInfo.styles';

interface PlaylistInfoProps {
  author?: IUserAPISchema | null | undefined;
  playlistTitle: string;
}

const PlaylistInfo = ({ playlistTitle, author }: PlaylistInfoProps) => {
  return (
    <S.ContentSection>
      <S.PlaylistTitle>{playlistTitle}</S.PlaylistTitle>
      <S.CreatorInfo>
        <ProfileImage size="3rem" imageUrl={author?.imgUrl || defaultImage} />
        <div>
          <S.CreatorName>{author?.name}</S.CreatorName>
          <S.CreatorSubInfo>
            플레이리스트 {author?.myPlaylists.length}개
          </S.CreatorSubInfo>
        </div>
      </S.CreatorInfo>
    </S.ContentSection>
  );
};

export default PlaylistInfo;
