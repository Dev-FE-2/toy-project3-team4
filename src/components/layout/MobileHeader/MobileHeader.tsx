import { URL } from '@/constant';
import { Logo, ProfileImage } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  return (
    <S.MobileHeader>
      <Logo width="15rem" />
      <ProfileImage width="3.2rem" link={URL.PROFILE.link} />
    </S.MobileHeader>
  );
};

export default MobileHeader;
