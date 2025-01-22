import { font, padding } from '@/styles';
import styled from 'styled-components';

export const CommentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${padding.sm};
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const CommentText = styled.p`
  font-size: ${font.size.info};
`;

export const CommentAuthor = styled.span`
  margin-right: ${padding.sm};
`;

export const CommentActions = styled.div`
  display: flex;
  margin-top: ${padding.xs};
  font-size: ${font.size.min};
`;
