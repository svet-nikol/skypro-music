import Image from "next/image";
import styles from "./TopBarPage.module.css";
import classNames from "classnames";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function TopBarPage() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logoDiv}>
        <Image
          className={styles.logoImage}
          src="/img/logo.png"
          alt="logo"
          width={113.33}
          height={17}
        />
      </div>
      <div className={styles.searchDiv}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={classNames(montserrat.className, styles.searchText)}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <div className={styles.personalDiv}>
        <p className={styles.personalName}>Sergey.Ivanov</p>
        <div className={styles.iconLogout}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
    </header>
  );
}
