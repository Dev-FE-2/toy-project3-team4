import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { border, colors, font, padding } from '@/styles';

export const VideoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${padding.md};
  padding: ${padding.sm} 0;
  border-radius: ${border.radius.xs};
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.semantic.background.grayLight};
  }
`;

export const MoveButton = styled.button`
  line-height: 0;
  padding: 0;
  margin-top: ${padding.sm};
  cursor: move;
`;

export const ThumbnailBox = styled.div`
  position: relative;
  flex-shrink: 0;
  font-size: 0;

  img {
    width: 12rem;
    height: 6.8rem;
    object-fit: cover;
    border-radius: ${border.radius.xs};
  }

  span {
    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;
    font-size: ${font.size.min};
    color: ${colors.semantic.text.white};
    background-color: ${hexToRgba(colors.semantic.background.dark, 0.8)};
    padding: 0 ${padding.xs};
  }
`;

export const VideoInfoBox = styled.div`
  flex: 1 1 0;
  min-width: 0;

  p {
    font-size: ${font.size.info};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p:last-child {
    font-size: ${font.size.min};
    margin-top: ${padding.xs};
    color: ${colors.semantic.text.grayDark};
  }
`;

export const DeleteVideoButton = styled.button`
  line-height: 0;
  color: ${colors.semantic.text.grayDark};
  padding: ${padding.xs};
  margin-top: -${padding.xs};
  margin-right: ${padding.xs};
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${colors.semantic.text.dark};
  }
`;
