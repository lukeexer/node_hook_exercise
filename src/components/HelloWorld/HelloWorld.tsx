import React from 'react';
import styles from './index.module.scss'

const HelloWorld = () => (
    <div className={`${styles.nightMode} ${styles.title}`}>
        Hello World!
    </div>
);

export default HelloWorld;