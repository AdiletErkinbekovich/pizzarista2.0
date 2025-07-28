import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing was founded
      </h1>
      <p className={styles.description}> Unhopefully this page wasn't found </p>
    </div>
  );
}

export default NotFoundBlock;
