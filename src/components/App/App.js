import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const mustDo = 'to do first';
const App = () => (<div>
	<h1>Hello!!!</h1>
	<p>text text text</p>
	<img src="" alt="pic"></img>
	<InputItem />
	<ItemList mustDo={mustDo} />
	<Footer number={10} />
	</div>);

export default App;