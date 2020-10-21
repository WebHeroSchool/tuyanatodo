import React from 'react';
import Items from '../Items/Items';

const ItemList = ({ mustDo}) => (<ol>
	<li><Items mustDo ={mustDo} /></li>
	<li><Items mustDo ={'to do second'} /></li>
	<li><Items mustDo = {'to do third'} /></li>
	</ol>);

export default ItemList;