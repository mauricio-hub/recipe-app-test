import './Header.scss';
import logo from '../../assets/logo.png';
import icHome from '../../assets/ic_home.png';

const menuItems = [
  'Home',
  'Vegetarianos',
  'Platos Principales',
  'Tortas',
  'Comida Rápida',
  'Menú Niños',
  'Sopas',
];

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="RecipeApp" className="header__logo" />

      <nav className="header__nav">
        <ul className="header__menu">
          {menuItems.map((item, index) => (
            <li key={index} className={`header__menu-item ${index === 0 ? 'header__menu-item--active' : ''}`}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <button className="header__mobile-btn">
        <img src={icHome} alt="Home" />
      </button>
    </header>
  );
}

export default Header;
