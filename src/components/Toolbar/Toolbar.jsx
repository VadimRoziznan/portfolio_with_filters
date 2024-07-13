import { useState } from 'react';
import React from "react";
import styles from './toolbar.module.css'

export const Toolbar = ({ onFilter }) => {
  const buttons = [
    {
      id: 1,
      title: 'All'
    },
    {
      id: 2,
      title: 'Websites'
    },
    {
      id: 3,
      title: 'Flayers'
    },
    {
      id: 4,
      title: 'Business Cards'
    }
  ];
  return (
    <div className={styles["toolbar"]}>
      {buttons.map((c) => (
        <button className={styles["button"]} key={c.id} onClick={() => onFilter(c.title)}>{c.title}</button>
      ))}
    </div>
  )
}
