import { Link } from 'react-router-dom';
import { URL } from '../../../constant';
import * as S from './Logo.styles';
import logoImage from '/logo_petmoment.svg';

const Logo = ({ width }: { width: string }) => {
  return (
    <Link to={URL.INDEX.link}>
      <S.Logo width={width}>
        <img src={logoImage} alt="PETMOMENT" />
      </S.Logo>
    </Link>
  );
};

export default Logo;
