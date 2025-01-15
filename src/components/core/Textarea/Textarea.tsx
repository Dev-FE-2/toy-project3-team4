import { ChangeEvent } from 'react';
import * as S from './Textarea.styles';

interface ITextarea {
  placeholder: string;
  name?: string;
  value: string;
  rows?: number;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  placeholder,
  name,
  rows = 3,
  required = false,
  value,
  onChange,
}: ITextarea) => {
  return (
    <S.Textarea
      placeholder={placeholder}
      id={name}
      name={name}
      value={value}
      rows={rows}
      onChange={onChange}
      {...(required ? { required } : {})}
    ></S.Textarea>
  );
};

export default Textarea;
