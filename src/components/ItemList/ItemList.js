import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class ItemList extends React.Component {
	render() {
		const { items, onClickDone } = this.props;
		return (
			<ol className={styles.list}>
				{items.map(item => 
					<li className={styles.item} key={item.value}><Item value={item.value}isDone={item.isDone} onClickDone={onClickDone} />
						<IconButton className={styles.delete} edge="end" aria-label="delete">
				            <DeleteIcon className={styles.delete}/>
				        </IconButton>
					</li>)}
			</ol>
		);
	}
}

export default ItemList;