import styled from 'styled-components';
import { border, font, padding } from '@/styles';

export const Container = styled.div`
  position: relative;
  padding-bottom: 3.2rem;
`;

export const ContentInner = styled.div`
  display: flex;

  @media (width <= 1024px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.section`
  flex: 1;
  max-width: 65%;

  @media (width < 1024px) {
    max-width: 100%;
  }
`;

export const RightColumn = styled.section`
  flex: 1;
  max-width: 35%;
  padding-left: ${padding.md};

  @media (width < 1024px) {
    max-width: 100%;
    border-left: none;
    padding-left: 0;
    margin-top: ${padding.md};
  }
`;

export const SectionWrapper = styled.section`
  margin-top: ${padding.md};
`;

export const SectionTitle = styled.h3`
  font-size: ${font.size.paragraph};
  font-weight: ${font.weight.subHeading};
  border-bottom: ${border.default};
  padding-bottom: ${padding.sm};
  margin-bottom: ${padding.sm};
`;
