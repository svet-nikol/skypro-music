import { PlaylistItemProps } from "./PlaylistItemTypes";
import styles from "./PlaylistItem.module.css"

export default function PlaylistItem({ item }: {item: PlaylistItemProps }) {
  return (
    <div className={styles.item}>
      <div className={styles.track}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <svg className={styles.titleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div>
            <a className={styles.titleLink} href="http://">
              {item.title} <span className={styles.titleSpan}>{item.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className={styles.author}>
          <a className={styles.authorLink} href="http://">
          {item.author}
          </a>
        </div>
        <div className={styles.album}>
          <a className={styles.albumLink} href="http://">
          {item.album}
          </a>
        </div>
        <div className={styles.likeTimeWrap}>
          <svg className={styles.timeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.timeText}>{item.time}</span>
        </div>
      </div>
    </div>
  );
}
