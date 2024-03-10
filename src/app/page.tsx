import styles from "./page.module.css";
import classNames from "classnames";
import TopBarPage from "@/components/Header/Header";
import NavMenu from "@/components/NavMenu/NavMenu";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import Playlist from "@/components/Playlist/Playlist";
import SetTracksList from "@/components/SetTracksList/SetTracksList";


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
