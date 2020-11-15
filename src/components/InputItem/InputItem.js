import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';


class InputItem extends React.Component {
	state = {
		inputValue: ''
	};

onButtonClick = () => {
	this.setState ({
		inputValue: ''
	});
	this.props.onClickAddNew(this.state.inputValue);

}

	render() {
		const { onClickAddNew } = this.props;
		return (
		<div className={styles.input}>
			<TextField 
				className={styles.textfield}
			    id="standard-basic"
			    label="New item" 
			    value={this.state.inputValue}
			    onChange={event => this.setState({inputValue: event.target.value})}
		    />
		    <Button 
		    	className={styles.button}
			    variant="contained" 
			    color="secondary"
			    onClick={this.onButtonClick}>
       		Add new item
      		</Button>
		</div>);
		
	}
}

export default InputItem;