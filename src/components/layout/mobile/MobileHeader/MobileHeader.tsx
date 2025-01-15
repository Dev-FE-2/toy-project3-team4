import { Logo, SearchInput } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  return (
    <S.MobileHeader>
      <Logo width="12rem" />
      <SearchInput />
    </S.MobileHeader>
  );
};

export default MobileHeader;
