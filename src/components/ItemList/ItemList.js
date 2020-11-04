import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class ItemList extends React.Component {
	render() {
		const { items, onClickDone, id, onClickDelete } = this.props;
		return (
			<ol className={styles.list}>
				{items.map(item => 
					<li className={styles.item} key={item.value}>
						<Item 
							value={item.value}
							isDone={item.isDone} 
							onClickDone={onClickDone}
							id={item.id} />
						<IconButton 
							className={styles.delete} 
							edge="end" 
							aria-label="delete"
							onClick={() => onClickDelete(id)}
							>
				            <DeleteIcon  />
				        </IconButton>
					</li>)}
			</ol>
		);
	}
}

export default ItemList;