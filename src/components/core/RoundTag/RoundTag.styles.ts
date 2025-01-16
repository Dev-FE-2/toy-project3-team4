import styled from 'styled-components';
import { border, colors, font, padding } from '@/styles';

export const RoundTag = styled.span`
  background-color: ${colors.semantic.secondary};
  color: white;
  padding: ${padding.xs} 0.6rem ${padding.xs} ${padding.sm};
  border-radius: ${border.radius.lg};
  font-size: 1.2rem;
  font-weight: ${font.weight.subHeading};
  display: inline-flex;
  align-items: center;

  button {
    line-height: 0;
    background: none;
    border: none;
    margin-left: ${padding.xs};
    padding: 0.2rem;
    color: ${colors.semantic.text.white};
    cursor: pointer;
  }

  &:hover {
    background-color: ${colors.semantic.hover.secondary};
  }
`;
