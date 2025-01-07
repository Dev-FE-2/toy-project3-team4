import { scale } from './scale';

const primaryValue = '#3E5371';
const neutralValue = '#F6F9FC';
const neutralVariantValue = '#CED4DA';
const darkValue = '#081732';
const grayLightValue = '#C2C6C9';
const grayDarkValue = '#9CA3AF';
const whiteValue = '#FFFFFF';

const semantic = {
  primary: primaryValue,
  secondary: '#A2C0DE',
  success: '#4CAF50',
  danger: '#DA626B',
  warning: scale.warning.s500,
  neutral: neutralValue, // 배경, 보조 텍스트, 구분선
  neutralVariant: neutralVariantValue, // 보조적인 배경, 비활성 상태 UI
  info: grayDarkValue,
  disabled: neutralVariantValue,
  hover: {
    primary: '#758AA7',
    secondary: '#C3D9EF',
    success: '#91CC93',
    danger: '#EB949B',
    warning: scale.warning.s400,
  },
  background: {
    white: whiteValue,
    light: neutralValue,
    gray: '#F8F8F8',
    dark: darkValue,
  },
  text: {
    white: whiteValue,
    grayLight: grayLightValue,
    grayDark: grayDarkValue,
    dark: darkValue,
    nav: primaryValue,
    placeholder: grayLightValue,
    disabled: grayDarkValue,
  },
  border: {
    light: neutralValue,
    focus: primaryValue,
  },
};

export { semantic };
