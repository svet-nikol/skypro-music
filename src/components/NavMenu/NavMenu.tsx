import NavBurger from "../NavBurger/NavBurger";
import NavLink from "../NavLink/NavLink";
import NavLinkList from "../NavLinkList/NavLinkList";
import styles from "./NavMenu.module.css";

export default function NavMenu({ children }: { children: React.ReactNode }) {
  return <nav className={styles.nav}>{children}</nav>;
}
