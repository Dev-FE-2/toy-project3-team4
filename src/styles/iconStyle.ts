import { css } from 'styled-components';

const iconStyle = css`
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export default iconStyle;
