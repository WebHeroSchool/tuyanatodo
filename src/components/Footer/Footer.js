import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';

class Footer extends React.Component {
	render() {
		const { count } = this.props;
		return (
			<div className={styles.footer}>
				<ButtonGroup size="small" aria-label="small outlined button group">
				    <Button className={styles.text}>{ count } items left</Button>
				    <Button className={styles.text}>All</Button>
				    <Button className={styles.text}>Active</Button>
				    <Button className={styles.text}>Completed</Button>
				    <Button className={styles.text}>Clear completed</Button>
				</ButtonGroup>
			</div>
		);
	}
}

Footer.defaultProps = {
	count: 0
};

Footer.propTypes ={
	count: propTypes.number
};

export default Footer;