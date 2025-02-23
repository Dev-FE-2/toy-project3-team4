import { ExplorePlayListCard, UserCard } from '@/components/card';
import * as S from './SearchPage.styles';
import { useSearchParams } from 'react-router-dom';
import { Button, InfiniteScroll } from '@/components';
import { useSearchPlaylist, useSearchUser } from '@/hooks';
import { Fragment } from 'react/jsx-runtime';

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword') || '';
  const { data, hasNextPage, fetchNextPage } = useSearchUser(keyword, 2);

  const handleMoreUser = () => {
    return fetchNextPage();
  };

  if (!keyword) return <div>적절하지 않은 접근입니다.</div>;

  const useHandlePlaylist = () => {
    return useSearchPlaylist(keyword);
  };

  return (
    <S.SearchContainer>
      <S.SearchTitle>사용자</S.SearchTitle>
      {data?.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {page.map((user, index) => (
            <UserCard key={index} data={user} />
          ))}
        </Fragment>
      ))}

      {data?.pages[0].length === 0 && <div>검색결과가 존재하지 않습니다.</div>}

      {data?.pages[0].length !== 0 && hasNextPage && (
        <Button $bgColor="white" $width="100%" onClick={handleMoreUser}>
          더보기
        </Button>
      )}

      <S.SearchTitle>플레이리스트</S.SearchTitle>
      <InfiniteScroll useInfiniteQuery={useHandlePlaylist}>
        {(data) => <ExplorePlayListCard data={data} />}
      </InfiniteScroll>
    </S.SearchContainer>
  );
};

export default SearchPage;
