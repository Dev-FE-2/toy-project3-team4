import styled from 'styled-components';
import { border, colors, padding } from '@/styles';

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
  margin-top: ${padding.md};

  @media (width >= 1280px) {
    width: 33.33%;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0;
    padding: ${padding.xs};
    border: ${border.default};
    border-radius: ${border.radius.xs};
  }
`;

export const VideoNoData = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${padding.md};
  padding: ${padding.md};
  color: ${colors.semantic.text.grayDark};
  cursor: pointer;
`;
