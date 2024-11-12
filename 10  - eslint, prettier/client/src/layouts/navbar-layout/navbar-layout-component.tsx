import { NavLink, Outlet } from 'react-router-dom';
import styles from './navbar-layout.module.scss';
import { routes } from '@routing';

const linkData = [
  { to: routes.HomePage, label: 'Home' },
  { to: routes.PostsPage, label: 'Posts' },
  { to: routes.AboutPage, label: 'About' },
];

export function NavbarLayout() {

  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul>
            {linkData.map(({to, label}) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => isActive ? styles.active : ''}>{label}</NavLink>
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
