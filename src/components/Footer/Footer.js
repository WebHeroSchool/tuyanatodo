import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Footer extends React.Component {
	render() {
		const { number } = this.props;
		return (
			<div className={styles.footer}>
				<ButtonGroup size="small" aria-label="small outlined button group">
				    <Button className={styles.text}>{ number } items left</Button>
				    <Button className={styles.text}>All</Button>
				    <Button className={styles.text}>Active</Button>
				    <Button className={styles.text}>Completed</Button>
				    <Button className={styles.text}>Clear completed</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Footer;