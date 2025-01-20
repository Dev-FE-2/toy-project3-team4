import styled from 'styled-components';
import { font, padding } from '@/styles';

export const CardContainer = styled.div`
  width: 100%;
  max-width: 48.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${padding.md};
  transition: 0.3s;
  cursor: pointer;
`;

export const CardImageBox = styled.div`
  min-width: 14rem;
  max-width: 50rem;
  width: 50%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInfoBox = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${padding.sm};
`;

export const CardInfoLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${font.size.info};
`;
