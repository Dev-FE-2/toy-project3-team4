import styled from 'styled-components';

export const TagList = styled.div<{ $gap: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$gap};
`;
