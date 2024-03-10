import NavBurger from "../NavBurger/NavBurger";
import NavLink from "../NavLink/NavLink";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <NavBurger />
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <NavLink>Главное</NavLink>
          <NavLink>Мой плейлист</NavLink>
          <NavLink>Войти</NavLink>
        </ul>
      </div>
    </nav>
  );
}
