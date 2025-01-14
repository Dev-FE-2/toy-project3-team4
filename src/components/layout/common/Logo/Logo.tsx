import { Link } from 'react-router-dom';
import { URL } from '@/constant';
import * as S from './Logo.styles';
import logoImage from '/logo_petmoment.svg';

type LogoProps = {
  width: string;
  padding?: string;
};

const Logo = ({ width, padding }: LogoProps) => {
  return (
    <Link to={URL.INDEX.link}>
      <S.Logo $width={width} $padding={padding}>
        <img src={logoImage} alt="PETMOMENT" />
      </S.Logo>
    </Link>
  );
};

export default Logo;
