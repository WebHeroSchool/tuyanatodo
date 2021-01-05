import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import Card from '@material-ui/core/Card';

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
				<div className={styles.block__info}>
					<Card>
						<div className={styles.main__info}>
							<div className={styles.img}>
								<img src={ myAvatar } alt='myPhoto' className={styles.img}></img>
							</div>
							<div className={styles.info}>
								<h3 className={styles.name}> { userName } </h3>
								<p className={styles.text_login}>Login: { login } </p>
								<p className={styles.text_bio}> Bio: { bio } </p>
							</div>
						</div>	
					</Card>
				</div>
				<Card>
					<div className={styles.repos}>
						<p className={styles.text}>{ isLoading ? <CircularProgress/> : 'My repositories:' }</p>
						{!isLoading && <ol className={styles.list}>
							{repoList.map(repo =>(<li  className={styles.item} key={repo.id}>
									<a href={repo.html_url} className={styles.link}>{repo.name}</a>
								</li>))}
						</ol>}
					</div>
				</Card>	
				{fetchFailure && <div>Ошибка</div>}
			</div>
		);
	}
}

export default About;