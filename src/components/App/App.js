import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


class App extends React.Component {
	state = {
		items: [
			{
				value: 'to do first',
				isDone: false,
				id: 1
			},
			{
				value: 'to do second',
				isDone: true,
				id: 2
			},
			{
				value: 'to do third',
				isDone: false,
				id: 3
			}
		]
	};

	onClickDone = id => {
		const newItemList = this.state.items.map(item =>{
			const newItem = { ...item};
			if (item.id == id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		this.setState({ items: newItemList});
	};

	render () {
		return (
			<div className={styles.main}>
				<Typography variant="h3" gutterBottom>
		        To do list:
		      	</Typography>
				<InputItem />
				<ItemList items={this.state.items} onClickDone={this.onClickDone} />
				<Footer number={2} />
			</div>);
	}	
}

export default App;