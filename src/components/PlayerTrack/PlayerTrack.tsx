import styles from "./PlayerTrack.module.css";
import classNames from "classnames";

export default function PlayerTrack() {
  return (
    <div className={styles.playerTrackWrap}>
      <div className={styles.contentDiv}>
        <div className={styles.image}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.author}>
          <a className={styles.authorLink} href="http://">
            Ты та...
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.albumLink} href="http://">
            Баста
          </a>
        </div>
      </div>
      <div className={styles.likeDiv}>
        <div className={classNames(styles.like, styles._btnIcon)}>
          <svg className={styles.likeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className={classNames(styles.dislike, styles._btnIcon)}>
          <svg className={styles.dislikeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  );
}
