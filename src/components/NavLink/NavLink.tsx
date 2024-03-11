import Link from "next/link";
import styles from "./NavLink.module.css";

export default function NavLink({ children, href }: {children: string; href: string}) {
  return (
    <li className={styles.item}>
      <Link href={href} className={styles.link}>
        {children}
      </Link>
    </li>
  );
}
