import styled from 'styled-components';
import { padding, border, colors } from '@/styles';

export const FollowNavItems = styled.nav`
  flex: 1;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
  padding: 0 0 ${padding.sm};
  border-top: ${border.default};
  border-bottom: ${border.default};
  margin-top: ${padding.sm};
  margin-bottom: ${padding.sm};

  .nav-title {
    padding: ${padding.sm};
    font-size: 1.6rem;
    font-weight: 700;
    position: sticky;
    line-height: 1;
    top: 0;
    background-color: ${colors.semantic.background.white};
    padding-top: ${padding.md};
    padding-bottom: ${padding.md};
  }
`;
