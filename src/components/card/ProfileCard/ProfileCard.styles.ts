import { RoundImage } from '@/components/core';
import { font, padding } from '@/styles';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  max-width: 76rem;
  padding: 0 ${padding['md']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${padding['md']};
  transition: 0.3s;

  @media (width <= 768px) {
    padding-top: ${padding.xl};
  }
`;

export const CardImage = styled(RoundImage)`
  width: 10rem;
  height: 10rem;
`;

export const CardWrapper = styled.div`
  flex: 1 0 auto;
`;

export const CardTitle = styled.h3`
  font-size: ${font.size['heading']};
  font-weight: ${font.weight['heading']};
  margin-bottom: 1.6rem;
`;

export const CardInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardStack = styled.button`
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const B = styled.b`
  font-weight: ${font.weight['heading']};
`;
