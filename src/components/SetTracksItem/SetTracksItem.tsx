import Image from "next/image";
import styles from "./SetTracksItem.module.css";

export default function SetTracksItem({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className={styles.itemWrap}>
      <a className={styles.link} href="#">
        <Image
          className={styles.img}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
    </div>
  );
}
