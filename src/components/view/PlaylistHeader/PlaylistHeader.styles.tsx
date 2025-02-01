import styled from 'styled-components';
import { padding } from '@/styles';

export const InteractionBar = styled.article`
  display: flex;
  align-items: center;
  gap: ${padding.sm};
  margin-bottom: ${padding.sm};

  .position-right {
    margin-left: auto;
  }
`;
