import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userName: '',
		login: '',
		bio: '',
		myAvatar: '',
		fetchFailure: false
	}

	componentDidMount () {
		octokit.repos.listForUser({
			username: 'tsidenova'
		}).then(({ data }) => {
				this.setState({
					repoList: data,
					isLoading: false,	
				})				
			}).catch(() => {
					this.setState ({
						fetchFailure: true
					});
				})
			
		
		octokit.users.getByUsername({
  			username: 'tsidenova'
		}).then(({ data }) =>{
				this.setState({
					userName: data.name,
					login: data.login,
					bio: data.bio,
					myAvatar: data.avatar_url
				})					 
			}).catch(() => {
					this.setState ({
						fetchFailure: true
					});
				})
	}

	render () {
		const { isLoading, repoList, userName, login, bio, fetchFailure, myAvatar } = this.state;
		return (
			<div className={styles.main}>
				<h2> My name is { userName } </h2>
				<img src={ myAvatar } alt='myPhoto'></img>
				<p className={styles.text_login}>Login: { login } </p>
				<p className={styles.text_bio}> Bio: { bio } </p>
				<p className={styles.text}>{ isLoading ? <CircularProgress/> : 'My repositories:' }</p>
				{!isLoading && <ol className={styles.list}>
					{repoList.map(repo =>(<li  className={styles.item} key={repo.id}>
							<a href={repo.html_url} className={styles.link}>{repo.name}</a>
						</li>))}
				</ol>}
				{fetchFailure && <div>Ошибка</div>}
			</div>
		);
	}
}

export default About;