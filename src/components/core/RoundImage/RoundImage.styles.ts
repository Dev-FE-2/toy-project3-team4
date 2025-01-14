import styled from 'styled-components';
import { colors, border } from '@/styles';

export const RoundImage = styled.div<{ $size: string; $isBorder?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.semantic.primary};
  width: ${(props) =>
    props.$isBorder ? `calc(${props.$size} + 2px)` : props.$size};
  height: ${(props) =>
    props.$isBorder ? `calc(${props.$size} + 2px)` : props.$size};
  border: ${(props) =>
    props.$isBorder ? `2px solid ${colors.semantic.primary}` : 'none'};
  border-radius: ${border.radius.full};
  overflow: hidden;

  img {
    width: 100%;
  }
`;
