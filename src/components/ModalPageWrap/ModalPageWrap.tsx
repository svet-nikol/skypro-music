import styles from "./ModalPageWrap.module.css";

export default function ModalPageWrap({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>{children}</div>
    </div>
  );
}
