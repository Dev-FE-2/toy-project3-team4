import { font } from '@/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingText = styled.span`
  font-size: ${font.size.min};
  margin-top: 0.5rem;
`;
