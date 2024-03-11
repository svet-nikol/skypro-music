import styles from "./page.module.css";
import TopBarPage from "@/components/Header/Header";
import NavMenu from "@/components/NavMenu/NavMenu";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import Playlist from "@/components/Playlist/Playlist";
import SetTracksList from "@/components/SetTracksList/SetTracksList";
import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";
import Centerblock from "@/components/Centerblock/Centerblock";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TopBarPage />
        <main className={styles.main}>
          <NavMenu />
          <Centerblock>
            <h2 className={styles.centerblockTitle}>Треки</h2>
            <FilterBlock />
            <Playlist />
          </Centerblock>
          <Sidebar>
            <SetTracksList />
          </Sidebar>
        </main>
        <Player />
        <footer />
      </div>
    </div>
  );
}
