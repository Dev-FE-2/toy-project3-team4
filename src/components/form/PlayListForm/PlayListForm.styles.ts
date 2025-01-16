import styled from 'styled-components';
import { colors, padding } from '@/styles';
import { Button } from '@/components/button';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${padding.lg};

  @media (width >= 1280px) {
    width: 66.66%;
    padding-right: 3rem;
  }
`;

export const Footer = styled.div`
  margin-top: 3.2rem;
  text-align: center;
`;

export const SaveButton = styled(Button)`
  max-width: 400px;
  color: ${colors.semantic.text.white};
`;
