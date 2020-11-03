import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
	render() {
		return (
		<div className={styles.input}>
			<TextField className={styles.textfield}
		     id="standard-basic"
		     label="Add an item" 
		    />
		</div>);
	}
}

export default InputItem;