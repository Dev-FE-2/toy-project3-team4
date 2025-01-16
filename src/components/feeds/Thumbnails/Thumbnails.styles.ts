import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { border, colors } from '@/styles';

export const Thumbnails = styled(Link)`
  display: block;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background-color: ${hexToRgba(colors.semantic.background.black, 8)};
  border-radius: ${border.radius.sm};
  position: relative;
  transition: all 0.3s;

  &:hover .thumb-hover {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;

    .bg-opacity {
      position: absolute;
      inset: 0;
      opacity: 0.5;
      background-color: ${colors.semantic.background.dark};
    }
  }
`;

export const Thumbnail = styled.picture`
  img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }
`;
