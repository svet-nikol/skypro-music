import styles from "./FilterItem.module.css";
import classNames from "classnames";

export default function FilterItem({ children }: { children: string }) {
  return (
    <div className={classNames(styles.filterButton, styles._btnText)}>
      {children}
    </div>
  );
}
