import styled from 'styled-components';
import { border, padding } from '@/styles';

export const VideoInfoSection = styled.div`
  background-color: #f8f8f8;
  border-radius: ${border.radius.sm};
  padding: ${padding.md};
`;

export const VideoStats = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14px;
  color: #3e5371;
  margin-bottom: 16px;
`;

export const VideoDescription = styled.p`
  font-size: 14px;
  color: #3e5371;
  white-space: pre-line;
  margin-bottom: 16px;
`;
