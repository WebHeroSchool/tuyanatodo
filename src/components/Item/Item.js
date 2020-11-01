import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';

const Item = ({ value, isDone, onClickDone  }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})
} onClick={() => onClickDone(isDone)}> {value} </span>);

export default Item;