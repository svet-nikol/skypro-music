import styles from "./ModalFormWrap.module.css";

export default function ModalFormWrap({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.modalBlock}>
      <form className={styles.modalFormLogin} action="#">{children}</form>
    </div>
  );
}
