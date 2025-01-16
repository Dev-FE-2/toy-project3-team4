import styled from 'styled-components';
import { border, colors, padding } from '@/styles';
import { Button } from '@/components/button';
import { hexToRgba } from '@/utils';

export const HistoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${padding.lg};
  padding: ${padding.md} 0;

  > ul {
    display: flex;
    flex-direction: column;
    gap: ${padding.xs};

    > li {
      border-radius: ${border.radius.sm};
      padding: ${padding.sm};
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${padding.sm};

      &:hover,
      &:focus,
      &:active {
        background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
      }
    }
  }
`;

export const HistoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const HistoryButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  &:hover {
    background-color: transparent;
  }
`;
