import React, { ChangeEvent } from 'react';
import * as S from './Input.styles';

interface IInput {
  type: string;
  placeholder: string;
  name?: string;
  value: string;
  required?: boolean;
  color?: string;
  bgColor?: string;
  isBorder?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  name,
  value,
  required = false,
  onChange,
  onClick,
  color,
  bgColor,
  isBorder = true,
}: IInput) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
      {...(required ? { required } : {})}
      $color={color}
      $bgColor={bgColor}
      $isBorder={isBorder}
    />
  );
};

export default Input;
