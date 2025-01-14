import styled from 'styled-components';
import { colors } from '@/styles';
import Button from '../Button';

export const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${colors.semantic.text.white};
  font-weight: 500;

  &:hover {
    background-color: ${colors.semantic.hover.primary};
  }

  img {
    width: 20px;
  }
`;
