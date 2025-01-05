import { NavLink } from 'react-router-dom';
import { NAV_ITEM } from '../../constant';
import { padding } from '../../styles';
import { default as S } from './NavBar.styles';

const NavBar = () => {
  return (
    <aside className="nav-bar">
      <header>로고</header>

      <S.Navigation padding={padding.lg}>
        <ul>
          {NAV_ITEM.map((navItem) => (
            <li key={navItem.name}>
              <NavLink to={navItem.link}>{navItem.text}</NavLink>
            </li>
          ))}
        </ul>
      </S.Navigation>
    </aside>
  );
};

export default NavBar;
