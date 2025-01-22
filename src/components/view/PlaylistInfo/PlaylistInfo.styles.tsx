import styled from 'styled-components';
import { font, padding } from '@/styles';

export const ContentSection = styled.div`
  margin-bottom: ${padding.md};
`;

export const PlaylistTitle = styled.h1`
  font-size: ${font.size.heading};
  font-weight: ${font.weight.heading};
  margin-bottom: ${padding.md};
`;

export const VideoActions = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const CreatorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${padding.sm};
`;

export const CreatorName = styled.h2`
  font-weight: 500;
  color: #081732;
`;

export const CreatorSubInfo = styled.p`
  font-size: 14px;
  color: #3e5371;
`;
