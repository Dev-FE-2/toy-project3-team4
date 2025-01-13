import styled from 'styled-components';
import { colors, padding, font } from '@/styles';

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${padding.md};

  @media (width >= 768px) {
    padding: ${padding.lg};
  }
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${padding.md};
`;

export const Title = styled.h1`
  font-size: ${font.size.headingLight};
  font-weight: ${font.weight.heading};
  margin-bottom: ${padding.xs};
`;

export const Subtitle = styled.p`
  font-size: ${font.size.subHeading};
  font-weight: ${font.weight.heading};
  color: ${colors.semantic.primary};
  margin-bottom: ${padding.xs};
`;

export const Description = styled.p`
  font-size: ${font.size.paragraph};
  color: ${colors.semantic.text.grayDark};
`;
