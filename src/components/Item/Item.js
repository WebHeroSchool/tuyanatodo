import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';


class Item extends React.Component {
	render() {
		const { value, isDone, onClickDone, id} = this.props;
		return (
			<span 
				className={
					classnames({
						[styles.item]: true,
						[styles.done]: isDone
					})
				} 	
				onClick={() => onClickDone(id)}
				>  {value} </span>

			
		);
	}
}

export default Item;