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
				
			</div>
		);
	}
}

Footer.defaultProps = {
	count: 0
};

Footer.propTypes = {
	count: PropTypes.number
};

export default Footer;