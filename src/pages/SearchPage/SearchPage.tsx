import { ExplorePlayListCard } from '@/components/card';
import * as S from './SearchPage.styles';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { searchPlaylist } from '@/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { LoaderWrapper } from '@/components';

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword') || '';
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['searchPlaylist', keyword],
    queryFn: () => searchPlaylist(keyword),
    enabled: !!keyword,
  });

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['searchPlaylist', keyword] });
  }, [searchParam]);

  return (
    <S.SearchContainer>
      <S.SearchTitle>플레이리스트</S.SearchTitle>
      <LoaderWrapper isLoading={isLoading}>
        {isSuccess &&
          data.map((playlist, i) => (
            <ExplorePlayListCard key={i} data={playlist} />
          ))}
      </LoaderWrapper>
    </S.SearchContainer>
  );
};

export default SearchPage;
