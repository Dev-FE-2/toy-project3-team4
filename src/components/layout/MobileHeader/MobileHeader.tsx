import { Logo } from '@/components';
import { RiSearchLine } from 'react-icons/ri';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  return (
    <S.MobileHeader>
      <Logo width="15rem" />
      <RiSearchLine size="2.4rem" />
    </S.MobileHeader>
  );
};

export default MobileHeader;
