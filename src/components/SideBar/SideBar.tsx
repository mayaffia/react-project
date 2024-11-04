import React from 'react';
import styles from './styles.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.inputContainer}>
        <label htmlFor="search">Поиск:</label>
        <input type="text" id="search" className={styles.input} />
      </div>

      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="filterCheckbox" />
        <label htmlFor="filterCheckbox">Товары в наличии</label>
      </div>

      <div className={styles.selectContainer}>
        <label htmlFor="categorySelect">Категория:</label>
        <select id="categorySelect" className={styles.select}>
          <option value="catepory1">Категория 1</option>
          <option value="catepory2">Категория 2</option>
          <option value="catepory3">Категория 3</option>
        </select>
      </div>
    </aside>
  );
}