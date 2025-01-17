import styled from 'styled-components';
import { Button } from '@/components';
import { colors, font, padding } from '@/styles';

export const FormItemSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
`;

export const InputBtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Label = styled.label`
  font-weight: ${font.weight.subHeading};
`;

export const Input = styled.input`
  width: 100%;
`;

export const AddButton = styled(Button)`
  color: ${colors.semantic.text.white};
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
`;

export const ErrorMessage = styled.p`
  font-size: ${font.size.min};
  color: ${colors.semantic.warning};
`;
