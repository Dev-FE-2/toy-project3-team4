import { colors, font, padding } from '@/styles';
import styled from 'styled-components';

export const CommentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${padding.sm};
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const CommentTextBox = styled.div`
  font-size: ${font.size.info};
`;

export const CommentAuthor = styled.span`
  margin-right: ${padding.sm};
`;

export const CommentText = styled.p`
  display: inline-block;
  word-break: break-all;
`;

export const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${padding.xs};
  font-size: ${font.size.min};
  color: ${colors.semantic.text.grayDark};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${padding.sm};

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
