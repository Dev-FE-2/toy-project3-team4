import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { colors } from '@/styles';
import * as S from './LoaderWrapper.styles';

interface LoaderWrapperProps {
  isLoading: boolean;
  text?: string;
  children?: React.ReactNode;
}

const LoaderWrapper = ({ isLoading, text, children }: LoaderWrapperProps) => {
  return isLoading ? (
    <S.Wrapper>
      <FadeLoader color={colors.semantic.primary} loading={true} />
      {text && <S.LoadingText>{text}</S.LoadingText>}
    </S.Wrapper>
  ) : (
    <>{children}</>
  );
};

export default LoaderWrapper;
