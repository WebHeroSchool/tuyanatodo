import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const App = () => {
	const items = [
		{
			value: 'to do first',
			isDone: false
		},
		{
			value: 'to do second',
			isDone: true
		},
		{
			value: 'to do third',
			isDone: false
		}
	];
	

	return (
	<div className={styles.main}>
		<Typography variant="h3" gutterBottom>
        To do list:
      	</Typography>
		<InputItem />
		<ItemList items={items} />
		<Footer number={2} />
	</div>);
}

export default App;