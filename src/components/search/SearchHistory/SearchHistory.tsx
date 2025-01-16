import { RiCloseLine } from 'react-icons/ri';
import * as S from './SearchHistory.styles';

const SearchHistory = () => {
  return (
    <S.HistoryContainer>
      <S.HistoryTitle>최근 검색 항목</S.HistoryTitle>
      <ul>
        <li>
          <span>내용</span>
          <S.HistoryButton $bgColor="white" $size="xs">
            <RiCloseLine size="1.8rem" />
          </S.HistoryButton>
        </li>
        <li>
          <span>내용</span>
          <S.HistoryButton $bgColor="white" $size="xs">
            <RiCloseLine size="1.8rem" />
          </S.HistoryButton>
        </li>
        <li>
          <span>내용</span>
          <S.HistoryButton $bgColor="white" $size="xs">
            <RiCloseLine size="1.8rem" />
          </S.HistoryButton>
        </li>
      </ul>
    </S.HistoryContainer>
  );
};

export default SearchHistory;
