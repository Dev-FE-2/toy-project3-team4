import styled from 'styled-components';
import { colors, font } from '../../../styles';

export const Logo = styled.div<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: ${font.size.subHeading};
  font-weight: ${font.weight.bold};
  color: ${colors.semantic.primary};
  width: ${(props) => props.width};

  img {
    width: 100%;
  }
`;
