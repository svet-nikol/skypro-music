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
import NavBurger from "@/components/NavBurger/NavBurger";
import NavLinkList from "@/components/NavLinkList/NavLinkList";
import NavLink from "@/components/NavLink/NavLink";

export default function Home() {
  return (
    <PageWrap>
      <TopBarPage />
      <Main>
        <NavMenu>
          <NavBurger />
          <NavLinkList>
            <NavLink href="/">Главное</NavLink>
            <NavLink href="/myplaylist">Мой плейлист</NavLink>
            <NavLink href="/signin">Войти</NavLink>
          </NavLinkList>
        </NavMenu>
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
