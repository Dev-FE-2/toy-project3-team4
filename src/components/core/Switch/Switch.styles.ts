import styled from 'styled-components';
import { colors } from '@/styles';
import { ISwitchVariant } from './Switch';

const { primary, secondary, danger, success, disabled, hover } =
  colors.semantic;

const COLOR = {
  default: {
    primary: primary,
    secondary: secondary,
    danger: danger,
    success: success,
    black: '#000000',
    disabled: disabled,
  },
  disabled: {
    primary: hover.primary,
    secondary: hover.secondary,
    danger: hover.danger,
    success: hover.success,
    black: '#000000',
    disabled: disabled,
  },
};

const RADIUS = {
  default: '4px',
  round: '48px',
};

export const Switch = styled.label<ISwitchVariant>`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;

  span {
    position: absolute;
    inset: 0;
    background-color: #ccc;
    transition: 0.2s;
    cursor: pointer;
    border-radius: ${(props) => {
      if (props.$radius) return RADIUS[props.$radius];
      return RADIUS['default'];
    }};

    &::before {
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      left: 4px;
      top: 50%;
      transform: translate(0, -50%);
      background-color: ${colors.semantic.background.white};
      transition: 0.2s;
      border-radius: ${(props) => {
        if (props.$radius) return RADIUS[props.$radius];
        return RADIUS['default'];
      }};
    }
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${(props) => COLOR.default[props.$bgColor]};

      &::before {
        transform: translate(24px, -50%);
      }
    }
  }

  &:disabled {
    background-color: ${(props) => COLOR.disabled[props.$bgColor]};
    cursor: not-allowed;
  }
`;
