import { Button } from '@/components';
import { colors, font } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 3.2rem;

  p {
    font-weight: ${font.weight.subHeading};
    margin-top: 1.6rem;
    color: ${colors.semantic.primary};
  }

  p:last-child {
    font-size: ${font.size.info};
    color: ${colors.semantic.text.grayDark};
    margin-top: 0.8rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2 {
    font-size: ${font.size.min};
    font-weight: ${font.weight.subHeading};
  }
`;

export const SectionFooter = styled.div`
  padding-top: 1.6rem;
  border-top: 1px solid ${colors.semantic.border.light};

  p {
    font-size: ${font.size.min};
    color: ${colors.semantic.text.grayDark};
  }
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  max-width: 50rem;
`;

export const InterestButton = styled(Button)<{ selected: boolean }>`
  padding: 1px 20px;
  background-color: ${({ selected }) =>
    selected ? colors.semantic.primary : colors.semantic.background.white};
  color: ${({ selected }) =>
    selected ? colors.semantic.text.white : colors.semantic.text.dark};

  &:hover {
    background-color: ${colors.semantic.primary};
    color: ${colors.semantic.text.white};
  }
`;

export const Footer = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

export const SaveButton = styled(Button)`
  max-width: 400px;
  color: ${colors.semantic.text.white};
`;
