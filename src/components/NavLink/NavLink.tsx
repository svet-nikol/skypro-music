import styles from "./NavLink.module.css";

export default function NavLink({ children }: {children: string}) {
  return (
    <li className={styles.item}>
      <a href="#" className={styles.link}>
        {children}
      </a>
    </li>
  );
}
