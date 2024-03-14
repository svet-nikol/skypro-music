import styles from "./NavBurger.module.css";
import React from 'react';

type NavBurgerProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const NavBurger: React.FC<NavBurgerProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.navBurgerDiv}>
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
      <span className={styles.burgerLine} />
    </div>
  );
}

export default NavBurger;