import styled from 'styled-components';
import { border, colors, padding } from '@/styles';

export const VideoPlayerBox = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: ${colors.semantic.background.grayLight};
  border: ${border.default};
  margin-bottom: ${padding.sm};
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const VideoThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
