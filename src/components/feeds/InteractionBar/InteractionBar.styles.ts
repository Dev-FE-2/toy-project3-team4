import styled from 'styled-components';
import { padding } from '@/styles';

export const InteractionBar = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: '4rem';
  gap: ${padding.sm};

  .position-right {
    margin-left: auto;
  }
`;
