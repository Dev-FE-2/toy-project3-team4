import { colors, padding } from '@/styles';
import styled from 'styled-components';

interface ITabButton {
  $active: boolean;
}

export const TabWrapper = styled.div`
  width: 100%;
  max-width: 76rem;
  height: fit-content;
  margin-top: ${padding.lg};
`;

export const TabList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TabItem = styled.li`
  flex: 1;
`;

export const TabButton = styled.button<ITabButton>`
  width: 100%;
  font-weight: bold;
  padding: ${padding.md};
  color: ${(props) =>
    props.$active ? 'black' : colors.semantic.text.grayDark};
  border-top: ${(props) =>
    props.$active ? '1px solid black' : '1px solid transparent'};
`;
