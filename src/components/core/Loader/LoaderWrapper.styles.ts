import { colors, font } from '@/styles';
import { hexToRgba } from '@/utils';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background-color: ${hexToRgba(colors.semantic.background.white, 0.8)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.span`
  font-size: ${font.size.min};
  margin-top: 0.5rem;
`;
