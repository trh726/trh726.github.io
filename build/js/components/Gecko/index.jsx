import React from 'react';
import SignUp from '../SignUp';
import LoginFields from '../LoginFields';
import SignUpFields from '../SignUpFields';
import Products from '../Products';
import {Helmet} from 'react-helmet';

export default class Gecko extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: null,
			view: 'signup'
		}
	}
	handleLogin = (event) => {		
		this.setState({
			login: event.target.email.value
		})		
	}
	viewLogin = () => {
		this.setState({
			view: 'login'
		})
	}
	viewSignup = () => {
		this.setState({
			view: 'signup'
		})
	}
	render() {
		console.log(this.state);
		return (
			<React.Fragment>			
				{!this.state.login && this.state.view === 'signup' &&
					<React.Fragment>
						<Helmet>
							<title>Develop With Gecko | Sign Up</title>
							<meta name="Sign up to develop with Gecko" content="Nested component" />
							<meta itemscope itemtype="http://schema.org/WebSite" />
							<link itemprop="url" href="http://www.example.com/"/>
							<script type="application/ld+json">{`
								{
									"@context": "http://schema.org",
									"@type": "WebSite",
									"url": "https://trh726.github.io",
								}
							`}</script>
						</Helmet>
						<SignUp title="Sign Up for Free" view={this.state.view} login={() => this.handleLogin(event)} changeView={() => this.viewLogin()}>
							<SignUpFields />
						</SignUp>
					</React.Fragment>
				}
				{!this.state.login && this.state.view === 'login' &&
					<React.Fragment>
						<Helmet>
							<title>Develop With Gecko | Log In</title>
							<meta name="Welcome back! Log in to develop with Gecko" content="Nested component" />
						</Helmet>
						<SignUp title="Welcome Back!" view={this.state.view} login={() => this.handleLogin(event)} changeView={() => this.viewSignup()}>
							<LoginFields />
						</SignUp>
					</React.Fragment>
				}
				{this.state.login &&
					<Products user={this.state.login} />
				}
			</React.Fragment>
		);
	}
}
