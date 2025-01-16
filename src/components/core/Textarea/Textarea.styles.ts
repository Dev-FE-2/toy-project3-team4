import { styled } from 'styled-components';
import { padding, border, colors } from '@/styles';

export const Textarea = styled.textarea`
  width: 100%;
  line-height: 1;
  padding: ${padding.sm} ${padding.md};
  border: ${border.default};
  border-radius: ${border.radius.sm};

  &:focus-visible {
    outline: none;
  }

  &:valid {
    border-color: ${colors.semantic.border.light};
  }

  &:invalid {
    border-color: ${colors.semantic.danger};
  }
`;
