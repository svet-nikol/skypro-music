import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerTrack from "../PlayerTrack/PlayerTrack";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import styles from "./Player.module.css";

export default function Player() {
  return (
    <div className={styles.bar}>
      <div className={styles.playerWrap}>
        <div className={styles.trackProgress} />
        <div className={styles.playerContent}>
          <div className={styles.barPlayer}>
            <PlayerControls />
            <PlayerTrack />
          </div>
          <div className={styles.barVolume}>
            <PlayerVolume />
          </div>
        </div>
      </div>
    </div>
  );
}
