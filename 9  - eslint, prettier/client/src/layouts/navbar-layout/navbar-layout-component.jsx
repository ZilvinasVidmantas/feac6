import { NavLink, Outlet } from "react-router-dom";
import styles from './navbar-layout.module.scss';

export function NavbarLayout() {

  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive && styles.active}>Home</NavLink>
            </li>
            <li>
              <NavLink to="posts" className={({ isActive }) => isActive && styles.active}>Posts</NavLink>
            </li>
            <li>
              <NavLink to="about" className={({ isActive }) => isActive && styles.active}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}