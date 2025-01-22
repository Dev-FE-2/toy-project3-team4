import { TagList } from '@/components';
import { formatDate } from '@/utils';
import type { IPlaylistAPISchema } from '@/types';
import * as S from './PlaylistStats.styles';

type PlaylistStatsProps = Pick<
  IPlaylistAPISchema,
  'content' | 'date' | 'hashTags' | 'hits'
>;

const PlaylistStats = ({
  content,
  date,
  hashTags,
  hits,
}: PlaylistStatsProps) => {
  return (
    <S.VideoInfoSection>
      <S.VideoStats>
        <span>조회수 {new Intl.NumberFormat().format(hits || 0)}회</span>
        {date && (
          <>
            <span>·</span>
            <span>{formatDate(date)}</span>
          </>
        )}
      </S.VideoStats>
      <S.VideoDescription>{content}</S.VideoDescription>
      <TagList tags={hashTags} tagType="round" gap={0.8} />
    </S.VideoInfoSection>
  );
};

export default PlaylistStats;
