import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ number }) => (<div className={styles.footer}>
	<p className={styles.text}> { number } items left</p>
	<p className={styles.text}>All</p>
	<p className={styles.text}>Active</p>
	<p className={styles.text}>Completed</p>
	<p className={styles.text}>Clear completed</p>
</div>);

export default Footer;