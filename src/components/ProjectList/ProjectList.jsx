import React, { Component } from 'react'
import styles from './projectList.module.css'


export const ProjectList = ({ images }) => {
  console.log(images)
  return (
    <div className={styles['container']}>
      {images.map((c, index) => (
        <img key={c.img + index} src={c.img} alt={c.category} />
      ))}
    </div>
  );
};