import { RiCloseLine } from 'react-icons/ri';
import * as S from './SearchHistoryList.styles';

const SearchHistoryList = () => {
  return (
    <S.SearchHistoryList>
      <h3 className="search-history-title">최근 검색 항목</h3>
      <ul>
        <li>
          내용{' '}
          <i>
            <RiCloseLine size="1.8rem" />
          </i>
        </li>
        <li>
          내용{' '}
          <i>
            <RiCloseLine size="1.8rem" />
          </i>
        </li>
        <li>
          내용{' '}
          <i>
            <RiCloseLine size="1.8rem" />
          </i>
        </li>
      </ul>
    </S.SearchHistoryList>
  );
};

export default SearchHistoryList;
