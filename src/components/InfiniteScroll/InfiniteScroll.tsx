import React, { useRef, useCallback } from 'react';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { LoaderWrapper } from '../core';

interface InfiniteScrollProps<T> {
  useInfiniteQuery: () => UseInfiniteQueryResult<InfiniteData<T[]>, Error>;
  children: (item: T) => React.ReactNode;
}

function InfiniteScroll<T>({
  useInfiniteQuery,
  children,
}: InfiniteScrollProps<T>) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log(hasNextPage);
          await fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  if (status === 'pending')
    return <LoaderWrapper isLoading={status === 'pending'} />;
  if (status === 'error') return <div>Error loading data</div>;

  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((item, itemIndex) => (
            <div
              key={itemIndex}
              ref={
                pageIndex === data.pages.length - 1 &&
                itemIndex === page.length - 1
                  ? lastItemRef
                  : null
              }
            >
              {children(item)}
            </div>
          ))}
        </React.Fragment>
      ))}
      {data.pages[0].length === 0 && <div>검색결과가 존재하지 않습니다.</div>}
    </div>
  );
}

export default InfiniteScroll;
