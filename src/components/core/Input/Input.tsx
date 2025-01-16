import { styled } from 'styled-components';
import { padding, border, colors } from '@/styles';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  $width?: string;
  $height?: string;
  $color?: string;
  $bgColor?: string;
  $isBorder?: boolean;
}

const Input = styled.input<IInput>`
  width: ${(props) => (props.$width ? props.$width : '100%')};
  height: ${(props) => (props.$height ? props.$height : '4rem')};
  line-height: 1;
  padding: 0 ${padding.md};
  border-radius: ${border.radius.sm};
  border: ${(props) => (props.$isBorder ? border.default : 'none')};
  color: ${(props) => (props.$color ? props.$color : '#000000')};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : '#ffffff')};

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

export default Input;
