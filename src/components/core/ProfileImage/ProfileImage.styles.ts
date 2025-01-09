import styled from 'styled-components';
import { colors } from '../../../styles';

export const ProfileImage = styled.div<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${colors.semantic.primary};
  width: ${(props) => props.width};

  img {
    width: 100%;
  }
`;
