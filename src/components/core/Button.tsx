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

const COLOR = {
  default: {
    primary: '#3E5371',
    secondary: '#A2C0DE',
    danger: '#DA626B',
    success: '#4CAF50',
    white: '#FFFFFF',
    black: '#000000',
    disabled: '#CED4DA',
  },
  hover: {
    primary: '#A2C0DE',
    secondary: '#C3D9EF',
    danger: '#EB949B',
    success: '#4CAF50',
    white: '#F8F8F8',
    black: '#000000',
    disabled: '#CED4DA',
  },
  disabled: {
    primary: '#A2C0DE',
    secondary: '#C3D9EF',
    danger: '#EB949B',
    success: '#4CAF50',
    white: '#F8F8F8',
    black: '#000000',
    disabled: '#CED4DA',
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
