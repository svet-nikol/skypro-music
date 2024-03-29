"use client";
import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import styles from "./FilterBlock.module.css";
import { filters } from "./filterData";

export default function FilterBlock() {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => (newFilter === prev ? null : newFilter));
  }

  return (
    <div className={styles.filterDiv}>
      <div className={styles.title}>Искать по:</div>
      {filters.map((item) => (
        <FilterItem
          key={item.id}
          onClick={() => handleFilterClick(item.name)}
          isOpened={activeFilter === item.name}
          list={item.list}
        >
          {item.text}
        </FilterItem>
      ))}
    </div>
  );
}