import styles from "./NavLinkList.module.css";

export default function NavLinkList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>{children} </ul>
    </div>
  );
}
