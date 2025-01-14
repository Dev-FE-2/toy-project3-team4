import { Button } from '@/components';
import { border, colors, font, padding } from '@/styles';
import styled from 'styled-components';

export const InfoContainer = styled.form`
  width: 100%;
  max-width: 72rem;
  height: 100%;
  padding: 0 ${padding.md};
  margin: 0 auto;
  position: relative;
  font-size: ${font.size.info};

  @media (width >= 768px) {
    padding: 0;
  }
`;

export const Title = styled.h2`
  width: 100%;
  padding: ${padding.lg} 0 ${padding.md};
  font-size: ${font.size.heading};
  font-weight: ${font.weight.heading};
`;

export const SubTitle = styled.h3`
  width: 100%;
  padding: ${padding.md} 0 ${padding.sm};
  font-size: ${font.size.subHeading};
  font-weight: ${font.weight.subHeading};
`;

export const InputText = styled.input`
  width: 100%;
  padding: ${padding.sm};
  border: 1px solid ${colors.semantic.primary};
  border-radius: ${border.radius.sm};

  &:focus {
    outline: 1px solid ${colors.semantic.hover.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 12rem;
  padding: ${padding.sm};
  border: 1px solid ${colors.semantic.primary};
  border-radius: ${border.radius.sm};
  resize: none;

  &:focus {
    outline: 1px solid ${colors.semantic.hover.primary};
  }
`;

export const UpdateButton = styled(Button)`
  width: 100%;
  margin-top: ${padding.lg};
  color: #fff;

  &:active {
    background-color: ${colors.semantic.hover.primary};
  }
`;
