import { useLocation } from 'react-router-dom';
import { URL } from '@/constant';
import { Logo, MobileSearchWrap, MobileMoreWrap } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  const { pathname } = useLocation();

  return (
    <S.MobileHeader id="mobileHedaer">
      <Logo width="12rem" />

      {pathname === URL.PROFILE.link ? (
        <MobileMoreWrap />
      ) : (
        <MobileSearchWrap />
      )}
    </S.MobileHeader>
  );
};

export default MobileHeader;
