import TopBarPage from "@/components/Header/Header";
import NavMenu from "@/components/NavMenu/NavMenu";
import Playlist from "@/components/Playlist/Playlist";
import Player from "@/components/Player/Player";
import Sidebar from "@/components/Sidebar/Sidebar";
import Centerblock from "@/components/Centerblock/Centerblock";
import PageWrap from "@/components/PageWrap/PageWrap";
import Main from "@/components/Main/Main";
import CenterblockTitle from "@/components/CenterblockTitle/CenterblockTitle";
import NavBurger from "@/components/NavBurger/NavBurger";

export default function MyPlaylist() {
  return (
    <PageWrap>
      <TopBarPage />
      <Main>
        <NavMenu>
          <NavBurger />
        </NavMenu>
        <Centerblock>
          <CenterblockTitle>Мои треки</CenterblockTitle>
          <Playlist />
        </Centerblock>
        <Sidebar></Sidebar>
      </Main>
      <Player />
      <footer />
    </PageWrap>
  );
}
