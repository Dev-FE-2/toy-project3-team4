import { font, padding } from '@/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
  width: 100%;
  max-width: 48.5rem;
  padding: 0 ${padding['md']};
  display: flex;
  align-items: center;
  gap: ${padding['md']};
  transition: 0.3s;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const CardWrapper = styled.div`
  flex: 1 0 auto;
`;

export const CardTitle = styled.h3`
  font-weight: ${font.weight['heading']};
  margin-bottom: 1.6rem;
`;

export const CardInfoBox = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const B = styled.b`
  font-weight: ${font.weight['heading']};
`;
