import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


const App = () => {
	const items = [
		{
			value: 'to do first'
		},
		{
			value: 'to do second'
		},
		{
			value: 'to do third'
		}
	];
	

	return (
	<div className={styles.main}>
		<h1 className={styles.title}>Hello!!!</h1>
		<p className={styles.text}>text text text</p>
		<img src="" alt="pic"></img>
		<InputItem />
		<ItemList items={items} />
		<Footer number={10} />
	</div>);
}

export default App;