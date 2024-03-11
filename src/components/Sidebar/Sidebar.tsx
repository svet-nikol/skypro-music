import styles from "./Sidebar.module.css";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>;
}
