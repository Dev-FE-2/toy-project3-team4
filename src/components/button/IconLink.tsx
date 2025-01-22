import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconLink = styled(Link)`
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export default IconLink;
