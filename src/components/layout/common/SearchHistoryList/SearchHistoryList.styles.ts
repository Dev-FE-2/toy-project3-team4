import styled from 'styled-components';
import { padding } from '@/styles';

export const SearchHistoryList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${padding.lg};
  padding: ${padding.md} 0;

  .search-history-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: ${padding.md};

    > li {
      display: flex;
      justify-content: space-between;
      gap: ${padding.sm};
    }
  }
`;
