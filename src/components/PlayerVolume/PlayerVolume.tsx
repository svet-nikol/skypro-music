import styles from "./PlayerVolume.module.css";

export default function PlayerVolume() {
  return (
    <div className={styles.volumeWrap}>
      <div className={styles.image}>
        <svg className={styles.imageSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
        </svg>
      </div>
      <div className={styles.progress}>
        <input className={styles.progressLine} type="range" name="range" />
      </div>
    </div>
  );
}
