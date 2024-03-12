import styles from "./CenterblockTitle.module.css";
import classNames from "classnames";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function CenterblockTitle({ children }: { children: string }) {
  return <h2 className={classNames(montserrat.className, styles.centerblockTitle)}>{children}</h2>;
}
