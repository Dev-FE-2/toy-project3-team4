import { HTMLInputTypeAttribute } from 'react';
import * as S from './FormItem.styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, Textarea } from '@/components';

interface FormItemProps<T extends string> {
  id: T;
  label: string;
  itemType?: HTMLInputTypeAttribute | 'textarea';
  placeholder?: string;
  maxLength?: number;
  error?: string;
  children?: React.ReactNode;
  register?: UseFormRegisterReturn;
}

const FormItem = <T extends string>({
  id,
  label,
  itemType = 'text',
  placeholder,
  maxLength,
  error,
  children,
  register,
}: FormItemProps<T>) => {
  return (
    <S.FormItemSet>
      <S.Label htmlFor={id}>{label}</S.Label>
      {itemType === 'textarea' ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register}
          rows={8}
        />
      ) : (
        <Input
          type={itemType}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register}
          $isBorder={true}
        />
      )}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {children}
    </S.FormItemSet>
  );
};

export default FormItem;
