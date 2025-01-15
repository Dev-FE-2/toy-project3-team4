import React from 'react';
import * as S from './PageTitle.styles';

const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <S.Title>{children}</S.Title>;
};

export default PageTitle;
