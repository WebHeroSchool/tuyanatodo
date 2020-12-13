import React from 'react';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuItem';
import MenuItem from '@material-ui/core/MenuItem';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const App =() => 
	(<Router>
		<div className={styles.block}>
		<div className={styles.wrap}>
			<Card>
				<MenuList className={styles.menu}>
					<p><Link to='/' className={styles.link}><MenuItem>About me</MenuItem></Link></p>
					<p><Link to='/todo' className={styles.link}><MenuItem>To do list</MenuItem></Link></p>
					<p><Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link></p>
				</MenuList>
			</Card>

			<Card>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
				<Route path='/contacts' component={Contacts} />
			</Card>
		</div>
		</div>
	</Router>);
		
export default App;