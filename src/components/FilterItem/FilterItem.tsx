import styles from "./FilterItem.module.css";
import classNames from "classnames";

type FilterItemProps = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: Array<{ id: number; name: string }>;
};

export default function FilterItem({
  children,
  onClick,
  isOpened,
  list,
}: FilterItemProps) {
  return (
    <div className={styles.wrap}>
      <div
        onClick={onClick}
        className={classNames(styles.filterButton, styles._btnText, isOpened && styles.btnActive)}
      >
        {children}
      </div>
      {isOpened && (
        <div className={styles.wrapList}>
          <ul className={styles.list}>
            {list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
