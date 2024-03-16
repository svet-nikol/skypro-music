'use client';
import { useState } from "react";
import NavBurger from "../NavBurger/NavBurger";
import NavLink from "../NavLink/NavLink";
import NavLinkList from "../NavLinkList/NavLinkList";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev);}

  return (<nav className={styles.nav}>
          <NavBurger onClick={togglePopUp}/>
          {isOpened &&           
          (<NavLinkList>
            <NavLink href="/">Главное</NavLink>
            <NavLink href="/myplaylist">Мой плейлист</NavLink>
            <NavLink href="/signin">Войти</NavLink>
          </NavLinkList>)}
          </nav>);
}