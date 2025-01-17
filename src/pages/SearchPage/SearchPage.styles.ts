import { font, padding } from '@/styles';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchTitle = styled.h2`
  width: 100%;
  max-width: 48.5rem;
  margin-bottom: ${padding.lg};
  font-size: ${font.size.subHeading};
  font-weight: ${font.weight.heading};
`;
