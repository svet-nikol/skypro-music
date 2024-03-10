import Image from "next/image";
import styles from "./page.module.css";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import PlaylistItem from "@/components/PlaylistItem/PlaylistItem";
import { playlistArray } from "@/components/PlaylistItem/playlistArray";
import TopBarPage from "@/components/TopBarPage/TopBarPage";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <TopBarPage />
        <main className={styles.main}>
          <nav className={classNames(styles.main__nav, styles.nav)}>
            <div className={classNames(styles.nav__burger, styles.nav__burger)}>
              <span className={styles.burger__line} />
              <span className={styles.burger__line} />
              <span className={styles.burger__line} />
            </div>
            <div className={classNames(styles.nav__menu, styles.menu)}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <a href="#" className={styles.menu__link}>
                    Главное
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="#" className={styles.menu__link}>
                    Мой плейлист
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a href="../signin.html" className={styles.menu__link}>
                    Войти
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div
            className={classNames(styles.main__centerblock, styles.centerblock)}
          >
            <h2 className={styles.centerblock__h2}>Треки</h2>
            <div
              className={classNames(styles.centerblock__filter, styles.filter)}
            >
              <div className={styles.filter__title}>Искать по:</div>
              <div
                className={classNames(styles.filter__button, styles._btnText)}
              >
                исполнителю
              </div>
              <div
                className={classNames(styles.filter__button, styles._btnText)}
              >
                году выпуска
              </div>
              <div
                className={classNames(styles.filter__button, styles._btnText)}
              >
                жанру
              </div>
            </div>
            <div className={styles.centerblock__content}>
              <div className={styles.content__title}>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col01
                  )}
                >
                  Трек
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col02
                  )}
                >
                  Исполнитель
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col03
                  )}
                >
                  Альбом
                </div>
                <div
                  className={classNames(
                    styles.playlistTitle__col,
                    styles.col04
                  )}
                >
                  <svg className={styles.playlistTitle__svg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
              <div className={styles.content__playlist}>
                {playlistArray.map((item, index) => (
                  <PlaylistItem key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className={classNames(styles.main__sidebar, styles.sidebar)}>
            <div className={styles.sidebar__block}>
              <div className={styles.sidebar__list}>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist02.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
                <div className={styles.sidebar__item}>
                  <a className={styles.sidebar__link} href="#">
                    <Image
                      className={styles.sidebar__img}
                      src="/img/playlist03.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className={styles.bar}>
          <div className={styles.bar__content}>
            <div className={styles.bar__playerProgress} />
            <div className={styles.bar__playerBlock}>
              <div className={classNames(styles.bar__player, styles.player)}>
                <div className={styles.player__controls}>
                  <div className={styles.player__btnPrev}>
                    <svg className={styles.player__btnPrevSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-prev" />
                    </svg>
                  </div>
                  <div
                    className={classNames(styles.player__btnPlay, styles._btn)}
                  >
                    <svg className={styles.player__btnPrevSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div className={styles.player__btnNext}>
                    <svg className={styles.player__btnNextSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-next" />
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.player__btnRepeat,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.player__btnRepeatSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat" />
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.player__btnShuffle,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.player__btnShuffleSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle" />
                    </svg>
                  </div>
                </div>
                <div className={styles.player__trackPlay}>
                  <div className={styles.trackPlay__contain}>
                    <div className={styles.trackPlay__image}>
                      <svg className={styles.trackPlay__svg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className={styles.trackPlay__author}>
                      <a
                        className={styles.trackPlay__authorLink}
                        href="http://"
                      >
                        Ты та...
                      </a>
                    </div>
                    <div className={styles.trackPlay__album}>
                      <a className={styles.trackPlay__albumLink} href="http://">
                        Баста
                      </a>
                    </div>
                  </div>
                  <div className={styles.trackPlay__likeDis}>
                    <div
                      className={classNames(
                        styles.trackPlay__like,
                        styles._btnIcon
                      )}
                    >
                      <svg className={styles.trackPlay__likeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-like" />
                      </svg>
                    </div>
                    <div
                      className={classNames(
                        styles.trackPlay__dislike,
                        styles._btnIcon
                      )}
                    >
                      <svg className={styles.trackPlay__dislikeSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bar__volumeBlock}>
                <div className={styles.volume__content}>
                  <div className={styles.volume__image}>
                    <svg className={styles.volume__svg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-volume" />
                    </svg>
                  </div>
                  <div
                    className={classNames(styles.volume__progress, styles._btn)}
                  >
                    <input
                      className={classNames(
                        styles.volume__progressLine,
                        styles._btn
                      )}
                      type="range"
                      name="range"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
