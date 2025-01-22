import { font, padding } from '@/styles';
import styled from 'styled-components';

export const VideoInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: center;
    gap: ${padding.sm};
  }
`;

export const VideoTitle = styled.h2`
  font-size: ${font.size.subHeading};
  font-weight: ${font.weight.subHeading};
`;

export const VideoSubInfo = styled.p`
  font-size: ${font.size.paragraph};
`;
