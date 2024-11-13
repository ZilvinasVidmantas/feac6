import { NavLink, Outlet } from 'react-router-dom';
import { routes } from '@routing';
import styles from './navbar-layout.module.scss';

const navLinksData = [
  { to: routes.HomePage, label: 'Home' },
  { to: routes.PostsPage, label: 'Posts' },
  { to: routes.AboutPage, label: 'About' },
];

const authLinksData = [
  { to: routes.Auth.LoginPage, label: 'Login' },
  { to: routes.Auth.RegisterPage, label: 'Register' },
];

export function NavbarLayout() {
  return (
    <>
      <header className={styles.navbar}>
        <nav className={styles.navLayout}>
          <ul>
            {navLinksData.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : '')}>{label}</NavLink>
              </li>
            ))}
          </ul>
          <ul>
            {authLinksData.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => (isActive ? styles.active : '')}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
