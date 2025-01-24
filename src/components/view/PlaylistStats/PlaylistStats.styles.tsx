import styled from 'styled-components';
import { border, colors, font, padding } from '@/styles';

export const VideoInfoSection = styled.div`
  background-color: ${colors.semantic.background.grayLight};
  border-radius: ${border.radius.sm};
  padding: ${padding.md};
`;

export const VideoStats = styled.div`
  display: flex;
  gap: ${padding.sm};
  font-size: ${font.size.info};
  color: ${colors.semantic.text.nav};
  margin-bottom: ${padding.md};
`;

export const DescriptionContainer = styled.div`
  position: relative;
  margin: ${padding.sm} 0;
`;

export const Description = styled.p<{ $isExpanded: boolean }>`
  font-size: ${font.size.paragraph};
  color: ${colors.semantic.text.nav};
  overflow: hidden;
  white-space: pre-wrap;
  ${({ $isExpanded }) =>
    !$isExpanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${colors.semantic.text.grayDark};
  cursor: pointer;
  padding: ${padding.xs} 0;
  margin-top: ${padding.xs};

  &:hover {
    text-decoration: underline;
  }
`;
