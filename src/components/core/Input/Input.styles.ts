import { styled } from 'styled-components';
import { padding, border, colors } from '@/styles';

export const Input = styled.input<{
  $color?: string;
  $bgColor?: string;
  $isBorder?: boolean;
}>`
  width: 100%;
  height: 40px;
  line-height: 1;
  padding: 0 ${padding.md};
  border-radius: ${border.radius.sm};
  border: ${(props) => (props.$isBorder ? border.default : 'none')};
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgColor};

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
