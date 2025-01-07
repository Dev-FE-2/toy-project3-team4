import styled from 'styled-components';

type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'white'
  | 'black'
  | 'disabled';
type ButtonRadius = 'sm' | 'md' | 'lg' | 'full';
type ButtonBackgroundColor = ButtonColor;
type ButtonBorder = ButtonColor;

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $bgColor: ButtonBackgroundColor;
  $width?: string;
  $radius?: ButtonRadius;
  $border?: ButtonBorder;
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
  sm: '6px',
  md: '10px',
  lg: '20px',
  full: '1000px',
};

const Button = styled.button<IButton>`
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) => COLOR.default[props.$bgColor]};

  width: ${(props) => {
    if (props.$width) return props.$width;
    return 'auto';
  }};

  border: ${(props) => {
    if (props.$border) return `1px solid ${COLOR.default[props.$border]}`;
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
