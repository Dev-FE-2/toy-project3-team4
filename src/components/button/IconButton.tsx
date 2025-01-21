import styled from 'styled-components';

type IIconButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = styled.button<IIconButton>`
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export default IconButton;
