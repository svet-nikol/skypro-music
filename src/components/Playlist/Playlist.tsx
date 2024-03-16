import styles from "./Playlist.module.css";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import PlaylistItem from "../PlaylistItem/PlaylistItem";
import { getTracks } from "@/api/tracks";

async function Playlist() {
  let playlistArray: trackType[];
  try {
    playlistArray = await getTracks();
  } catch (error) {
    console.error("Произошла ошибка при получении списка треков:", error);
    playlistArray = [];
  }

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

export default Playlist;