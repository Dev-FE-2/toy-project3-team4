import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { border, colors, padding, font } from '@/styles';

export const Thumbnails = styled(Link)`
  display: block;
  width: calc(100% + 2 * ${padding.md});
  margin-left: calc(-1 * ${padding.md});
  margin-right: calc(-1 * ${padding.md});
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background-color: ${hexToRgba(colors.semantic.background.black, 8)};
  position: relative;
  transition: opacity 0.5s;

  @media (width >= 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    border-radius: ${border.radius.sm};
  }

  .multiple-flag {
    position: absolute;
    bottom: ${padding.sm};
    right: ${padding.sm};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${padding.xs};
    background-color: ${colors.semantic.primary};
    color: ${colors.semantic.text.white};
    line-height: 1;
    padding: ${padding.xs} ${padding.sm} ${padding.xs} ${padding.xs};
    border-radius: ${border.radius.xs};
    opacity: 0.8;
    font-size: ${font.size.info};
    font-weight: 600;
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
    margin: 0 auto;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(1.01);
  }
`;
