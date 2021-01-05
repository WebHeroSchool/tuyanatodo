import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';

const Todo =() => {
	const initialState = {
		items: [
			{
				value: 'to do first',
				isDone: false,
				id: 1,
			},
			{
				value: 'to do second',
				isDone: true,
				id: 2,
			},
			{
				value: 'to do third',
				isDone: false,
				id: 3,
			}
		],
		count: 3
	};

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

	useEffect(() => {
		console.log("changed count");
	}, [count]);

	useEffect(() => {
		console.log("update");
	});

	useEffect(() => {
		console.log("mount");
	}, []);


	const onClickDone = id => {
		const newItemList = items.map(item =>{
			const newItem = { ...item};
			if (item.id == id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		setItems(newItemList);
	};

	const onClickDelete = id => {
		const deletedItemList = items.filter(item => item.id !== id);
		setItems(deletedItemList);
		setCount((count) => count - 1)
	};

	const onClickAddNew = value => {
		const newItems = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItems(newItems);
		setCount((count) => count + 1);
	};

		return (
			<div className={styles.wrap}>
				<Card>
					<div className={styles.main}>
						<h3 className={styles.title}>Tasks:</h3>
						
						<Fab
         					variant="extended"
          					size="small"
          					color="primary"
          					aria-label="add"
          					>
							All tasks 
        				</Fab>
        				<Fab
         					variant="extended"
          					size="small"
          					color="primary"
          					aria-label="add"
          					>
							{ count } items left
        				</Fab>
        				<Fab
         					variant="extended"
          					size="small"
          					color="primary"
          					aria-label="add"
          					>
							Done
        				</Fab>
        				<ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete}/>
						<InputItem onClickAddNew={onClickAddNew}/>
						<Footer count={count} />
					</div>
				</Card>	
			</div>);
			
		
}

Todo.propTypes = {
	value: PropTypes.string,
	isDone: PropTypes.bool,
	id: PropTypes.number,
	count: PropTypes.number,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func,
	onClickAddNew: PropTypes.func
}


export default Todo;