import { NavLink } from 'react-router-dom';
import css from './header.module.css';
export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.logoBlock}>
        <img className={css.logo} src='/img/home.jpg' alt='home logo' />
      </div>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to='/'>
          Home
        </NavLink>
        <NavLink className={css.navLink} to='/about'>
          About
        </NavLink>
        <NavLink className={css.navLink} to='/posts'>
          Posts
        </NavLink>
      </nav>
    </header>
  );
}
