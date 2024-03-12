import styles from "./Centerblock.module.css";

export default function Centerblock({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.centerblock}>{children}</div>;
}
