import styles from "./PlaylistTitle.module.css";
import classNames from "classnames";

export default function PlaylistTitle() {
  return (
    <div className={styles.titleDiv}>
      <div className={classNames(styles.col, styles.col01)}>
        Трек
      </div>
      <div className={classNames(styles.col, styles.col02)}>
        Исполнитель
      </div>
      <div className={classNames(styles.col, styles.col03)}>
        Альбом
      </div>
      <div className={classNames(styles.col, styles.col04)}>
        <svg className={styles.titleSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  );
}
