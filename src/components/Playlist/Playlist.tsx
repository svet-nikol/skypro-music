import styles from "./Playlist.module.css";
import { playlistArray } from "../PlaylistItem/playlistArray";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import PlaylistItem from "../PlaylistItem/PlaylistItem";

export default function Playlist() {
  return (
    <div className={styles.playlistContent}>
      <PlaylistTitle />
      <div className={styles.tracksList}>
        {playlistArray.map((item, index) => (
          <PlaylistItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
