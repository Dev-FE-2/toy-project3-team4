import { scale } from './scale';

const PRIMARY_COLOR = '#3E5371';
const NEUTRAL_COLOR = '#DBDBDB'; // instagram 기준
const NEUTRAL_VARIANT_COLOR = '#CED4DA';
const DARK_COLOR = '#081732';
const GRAY_LIGHT_COLOR = '#C2C6C9';
const GRAY_DARK_COLOR = '#9CA3AF';
const WHITE_COLOR = '#FFFFFF';

const semantic = {
  primary: PRIMARY_COLOR,
  secondary: '#A2C0DE',
  success: '#4CAF50',
  danger: '#DA626B',
  warning: scale.warning.s500,
  neutral: NEUTRAL_COLOR, // 주요 컨텐츠 배경, 보조 텍스트, 구분선
  neutralVariant: NEUTRAL_VARIANT_COLOR, // 보조적인 배경, 비활성 상태 UI, 그림자 효과
  info: GRAY_DARK_COLOR,
  disabled: NEUTRAL_VARIANT_COLOR,
  hover: {
    primary: '#2B3A50',
    secondary: '#8AA7C4',
    success: '#91CC93',
    danger: '#EB949B',
    warning: scale.warning.s400,
  },
  background: {
    white: WHITE_COLOR,
    light: NEUTRAL_COLOR,
    gray: '#F8F8F8',
    dark: DARK_COLOR,
  },
  text: {
    white: WHITE_COLOR,
    grayLight: GRAY_LIGHT_COLOR,
    grayDark: GRAY_DARK_COLOR,
    dark: DARK_COLOR,
    nav: PRIMARY_COLOR,
    placeholder: GRAY_LIGHT_COLOR,
    disabled: GRAY_DARK_COLOR,
  },
  border: {
    light: NEUTRAL_COLOR,
    focus: PRIMARY_COLOR,
  },
};

export { semantic };
