import styled from 'styled-components';
import { colors, border } from '@/styles';

export const ProfileImage = styled.div<{ $width: string; $isBorder?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  color: ${colors.semantic.primary};
  width: ${(props) => props.$width};
  border: ${(props) =>
    props.$isBorder ? `2px solid ${colors.semantic.primary}` : 'none'};
  border-radius: ${(props) =>
    props.$isBorder ? `${border.radius.full}` : '0'};

  img {
    width: 100%;
  }
`;
