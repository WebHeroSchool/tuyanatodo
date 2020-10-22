import React from 'react';
import Items from '../Items/Items';

const ItemList = ({ items }) => (<ol>
	{items.map(item => <li key={item.value}><Items value = {item.value} /></li>)}
</ol>);

export default ItemList;