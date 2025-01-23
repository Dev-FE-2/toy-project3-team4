import styled from 'styled-components';
import { iconStyle } from '@/styles';

type IIconButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = styled.button<IIconButton>`
  ${iconStyle}
`;

export default IconButton;
