import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ items }) => (<ol>
	{items.map(item => <li key={item.value}><Item value={item.value}isDone={item.isDone} /></li>)}
</ol>);

export default ItemList;