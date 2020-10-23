import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';


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
	<div>
		<h1>Hello!!!</h1>
		<p>text text text</p>
		<img src="" alt="pic"></img>
		<InputItem />
		<ItemList items={items} />
		<Footer number={10} />
	</div>);
}

export default App;