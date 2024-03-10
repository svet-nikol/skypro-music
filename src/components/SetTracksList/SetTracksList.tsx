import SetTracksItem from "../SetTracksItem/SetTracksItem";
import styles from "./SetTracksList.module.css";

export default function SetTracksList() {
  return (
    <div className={styles.block}>
      <div className={styles.list}>
        <SetTracksItem
          src={"/img/playlist01.png"}
          alt={"day's playlist"}
          width={250}
          height={150}
        />
        <SetTracksItem
          src={"/img/playlist02.png"}
          alt={"100 dance tracks"}
          width={250}
          height={150}
        />
        <SetTracksItem
          src={"/img/playlist03.png"}
          alt={"indie-charge"}
          width={250}
          height={150}
        />
      </div>
    </div>
  );
}
