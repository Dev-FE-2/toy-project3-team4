import styled from 'styled-components';
import { colors, padding, font, border } from '@/styles';

export const SearchFormSideDropdown = styled.article<{ $isVisible: boolean }>`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 22.3rem;
  height: 100vh;
  width: 30rem;
  padding: 0 ${padding.md};
  box-shadow: 4px 0 24px rgb(0 0 0 / 15%);
  background-color: ${colors.semantic.background.white};
  border-radius: 0 16px 16px 0;
  overflow: hidden;
  font-size: 14px;
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

export const SearchFormHeader = styled.header`
  padding: 0 ${padding.md} ${padding.md};
  margin: 0 calc(-1 * ${padding.md});
  border-bottom: ${border.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${padding.lg};

  .search-title {
    padding: 3rem 0 2rem;
    font-size: ${font.size.subHeading};
    font-weight: 700;
  }
`;
