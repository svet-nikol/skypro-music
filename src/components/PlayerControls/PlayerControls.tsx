import styles from "./PlayerControls.module.css";
import classNames from "classnames";

export default function PlayerControls() {
  return (
    <div className={styles.controlsWrap}>
      <div className={styles.btnPrev}>
        <svg className={styles.btnPrevSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={styles.btnPlay}>
        <svg className={styles.btnPrevSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className={styles.btnNext}>
        <svg className={styles.btnNextSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={classNames(styles.btnRepeat, styles._btnIcon)}>
        <svg className={styles.btnRepeatSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className={classNames(styles.btnShuffle, styles._btnIcon)}>
        <svg className={styles.btnShuffleSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
}
