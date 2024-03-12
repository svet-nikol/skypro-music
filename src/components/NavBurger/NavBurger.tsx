import styles from "./NavBurger.module.css";

export default function NavBurger() {
  return (
    <div className={styles.navBurgerDiv}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
}
