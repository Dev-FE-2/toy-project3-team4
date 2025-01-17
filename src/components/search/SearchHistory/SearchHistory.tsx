import { RiCloseLine } from 'react-icons/ri';
import * as S from './SearchHistory.styles';
import { useSearchHistory, useSearchHistoryActions } from '@/store';
import { createSearchParams, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

interface ISearchHistory {
  resetVisibility: () => void;
}

const SearchHistory = ({ resetVisibility }: ISearchHistory) => {
  const historyList = useSearchHistory();
  const { removeSearchHistory } = useSearchHistoryActions();
  const navigate = useNavigate();

  const handleClick = (keyword: string) => {
    resetVisibility();
    navigate({
      pathname: './search',
      search: createSearchParams({ keyword }).toString(),
    });
  };

  const deleteHistory = (e: MouseEvent, history: string) => {
    e.stopPropagation();
    removeSearchHistory(history);
    resetVisibility();
  };

  return (
    <S.HistoryContainer>
      <S.HistoryTitle>최근 검색 항목</S.HistoryTitle>
      <ul>
        {historyList.map((history, i) => (
          <li key={i} onClick={() => handleClick(history)}>
            <span>{history}</span>
            <S.HistoryButton
              $bgColor="white"
              $size="xs"
              onClick={(e) => deleteHistory(e, history)}
            >
              <RiCloseLine size="1.8rem" />
            </S.HistoryButton>
          </li>
        ))}
      </ul>
    </S.HistoryContainer>
  );
};

export default SearchHistory;
