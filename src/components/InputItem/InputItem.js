import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className={styles.input}>
	<TextField className={styles.textfield}
     id="standard-basic"
     label="Add an item" 
    />
</div>);

export default InputItem;