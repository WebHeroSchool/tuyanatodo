import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		onError: false,
		helperText: ''
	};

onButtonClick = () => {
	this.setState ({
		inputValue: ''
	});
	if (this.state.inputValue == '') {
	this.setState({ onError: true, helperText: 'Incorrect entry' });
	} else {
		this .setState({helperText: ''});
		this.props.onClickAddNew(this.state.inputValue);
	};

}


	render() {
		const { onClickAddNew } = this.props;
		return (
		<div className={styles.input}>
			<TextField 
				onError={this.state.onError}
				helperText={this.state.helperText}
				className={styles.textfield}
			    id="standard-basic"
			    label="New item" 
			    value={this.state.inputValue}
			    onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
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

InputItem.propTypes = {
	inputValue: PropTypes.string,
	helperText: PropTypes.string,
	onButtonClick: PropTypes.func
};

export default InputItem;