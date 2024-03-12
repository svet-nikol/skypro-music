import FilterItem from "../FilterItem/FilterItem";
import styles from "./FilterBlock.module.css";

export default function FilterBlock() {
  return (
    <div className={styles.filterDiv}>
      <div className={styles.title}>Искать по:</div>
      <FilterItem>исполнителю</FilterItem>
      <FilterItem>году выпуска</FilterItem>
      <FilterItem>жанру</FilterItem>
    </div>
  );
}
