import { useLocation } from 'react-router-dom';
import { URL } from '@/constant';
import { generateRoutingLink } from '@/utils';
import { useUserSn } from '@/store';
import { Logo, MobileMoreWrap } from '@/components';
import { MobileSearch } from '../MobileSearch';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  const { pathname } = useLocation();
  const userSn = useUserSn();

  return (
    <header id="mobileHedaer">
      <S.MobileHeader>
        <Logo width="12rem" />

        {pathname === generateRoutingLink(URL.PROFILE.link, userSn) ? (
          <MobileMoreWrap />
        ) : (
          <MobileSearch />
        )}
      </S.MobileHeader>
    </header>
  );
};

export default MobileHeader;
