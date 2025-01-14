import { colors } from '@/styles';
import styled from 'styled-components';

type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'white'
  | 'black'
  | 'disabled';
type ButtonRadius = 'default' | 'full';
type ButtonBackgroundColor = ButtonColor;
type ButtonBorder = ButtonColor;
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $bgColor: ButtonBackgroundColor;
  $size?: ButtonSize;
  $width?: string;
  $radius?: ButtonRadius;
  $borderColor?: ButtonBorder;
}

const { primary, secondary, danger, success, disabled, hover } =
  colors.semantic;

const COLOR = {
  default: {
    primary: primary,
    secondary: secondary,
    danger: danger,
    success: success,
    white: '#FFFFFF',
    black: '#000000',
    disabled: disabled,
  },
  hover: {
    primary: hover.primary,
    secondary: hover.secondary,
    danger: hover.danger,
    success: hover.success,
    white: '#F8F8F8',
    black: '#000000',
    disabled: disabled,
  },
  disabled: {
    primary: hover.primary,
    secondary: hover.secondary,
    danger: hover.danger,
    success: hover.success,
    white: '#F8F8F8',
    black: '#000000',
    disabled: disabled,
  },
};

const RADIUS = {
  default: '8px',
  full: '50%',
};

const SIZE = {
  xs: {
    height: '32px',
    fontSize: '13px',
  },
  sm: {
    height: '36px',
    fontSize: '14px',
  },
  md: {
    height: '40px',
    fontSize: '14px',
  },
  lg: {
    height: '48px',
    fontSize: '16px',
  },
  xl: {
    height: '52px',
    fontSize: '16px',
  },
};

const Button = styled.button<IButton>`
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) => COLOR.default[props.$bgColor]};
  width: ${(props) => {
    if (props.$width) return props.$width;
    return 'auto';
  }};
  height: ${(props) => {
    if (props.$size) return SIZE[props.$size].height;
    return SIZE.xl.height; // 52px
  }};
  font-size: ${(props) => {
    if (props.$size) return SIZE[props.$size].fontSize;
    return SIZE.xl.fontSize; // 16px
  }};
  border: ${(props) => {
    if (props.$borderColor)
      return `1px solid ${COLOR.default[props.$borderColor]}`;
    return 'none';
  }};
  border-radius: ${(props) => {
    if (props.$radius) return RADIUS[props.$radius];
    return 0;
  }};

  &:hover {
    background-color: ${(props) => COLOR.hover[props.$bgColor]};
  }

  &:disabled {
    background-color: ${(props) => COLOR.disabled[props.$bgColor]};
    cursor: not-allowed;
  }
`;

export default Button;
