import { useLocation } from 'react-router-dom';
import { URL } from '@/constant';
import { Logo, MobileSearchWrap } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  const { pathname } = useLocation();

  return (
    <S.MobileHeader id="mobileHedaer">
      <Logo width="12rem" />

      {pathname === URL.PROFILE.link ? <>더보기</> : <MobileSearchWrap />}
    </S.MobileHeader>
  );
};

export default MobileHeader;
