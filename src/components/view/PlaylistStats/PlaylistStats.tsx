import { useEffect, useRef, useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 컨텐츠가 3줄 이상인지 체크
    const checkHeight = () => {
      if (descriptionRef.current) {
        const lineHeight = parseInt(
          getComputedStyle(descriptionRef.current).lineHeight,
        );
        const maxHeight = lineHeight * 3;
        setShowButton(descriptionRef.current.scrollHeight > maxHeight);
      }
    };

    checkHeight();
    // 윈도우 리사이즈 시에도 체크
    window.addEventListener('resize', checkHeight);
    return () => window.removeEventListener('resize', checkHeight);
  }, [content]);

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

      <S.DescriptionContainer>
        <S.Description ref={descriptionRef} $isExpanded={isExpanded}>
          {content}
        </S.Description>
        {showButton && (
          <S.ToggleButton
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? '간략히' : '더보기'}
          </S.ToggleButton>
        )}
      </S.DescriptionContainer>

      <TagList tags={hashTags} tagType="round" gap={0.8} />
    </S.VideoInfoSection>
  );
};

export default PlaylistStats;
