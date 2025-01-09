import { URL } from '@/constant';
import { Logo, ProfileImage } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  return (
    <S.MobileHeader>
      <Logo width="150px" />
      <ProfileImage width="32px" link={URL.PROFILE.link} />
    </S.MobileHeader>
  );
};

export default MobileHeader;
