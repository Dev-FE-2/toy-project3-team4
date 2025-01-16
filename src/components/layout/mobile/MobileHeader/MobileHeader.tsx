import { useLocation } from 'react-router-dom';
import { URL } from '@/constant';
import { Logo, MobileMoreWrap } from '@/components';
import * as S from './MobileHeader.styles';
import { MobileSearch } from '../MobileSearch';

const MobileHeader = () => {
  const { pathname } = useLocation();

  return (
    <header id="mobileHedaer">
      <S.MobileHeader>
        <Logo width="12rem" />

        {pathname === URL.PROFILE.link ? <MobileMoreWrap /> : <MobileSearch />}
      </S.MobileHeader>
    </header>
  );
};

export default MobileHeader;
