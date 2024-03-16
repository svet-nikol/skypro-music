import TopBarPage from "@/components/Header/Header";
import NavMenu from "@/components/NavMenu/NavMenu";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import Playlist from "@/components/Playlist/Playlist";
import SetTracksList from "@/components/SetTracksList/SetTracksList";
import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";
import Centerblock from "@/components/Centerblock/Centerblock";
import PageWrap from "@/components/PageWrap/PageWrap";
import Main from "@/components/Main/Main";
import CenterblockTitle from "@/components/CenterblockTitle/CenterblockTitle";

export default function Home() {
  return (
    <PageWrap>
      <TopBarPage />
      <Main>
        <NavMenu />
        <Centerblock>
          <CenterblockTitle>Треки</CenterblockTitle>
          <FilterBlock />
          <Playlist />
        </Centerblock>
        <Sidebar>
          <SetTracksList />
        </Sidebar>
      </Main>
      <Player />
      <footer />
    </PageWrap>
  );
}
