import styles from "./page.module.css";
import TopBarPage from "@/components/Header/Header";
import NavMenu from "@/components/NavMenu/NavMenu";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import Playlist from "@/components/Playlist/Playlist";
import SetTracksList from "@/components/SetTracksList/SetTracksList";
import Player from "@/components/Player/Player";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TopBarPage />
        <main className={styles.main}>
          <NavMenu />
          <div className={styles.centerblock}>
            <h2>Треки</h2>
            <FilterBlock />
            <Playlist />
          </div>
          <div className={styles.sidebar}>
            <SetTracksList />
          </div>
        </main>
        <div className={styles.bar}>
          <Player />
        </div>
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
