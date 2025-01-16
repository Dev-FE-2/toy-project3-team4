import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { border, colors, padding } from '@/styles';

export const Thumbnails = styled(Link)`
  display: block;
  width: calc(100% + 2 * ${padding.md});
  margin-left: calc(-1 * ${padding.md});
  margin-right: calc(-1 * ${padding.md});
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background-color: ${hexToRgba(colors.semantic.background.black, 8)};
  position: relative;
  transition: all 0.3s;

  @media (width >= 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    border-radius: ${border.radius.sm};
  }

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
