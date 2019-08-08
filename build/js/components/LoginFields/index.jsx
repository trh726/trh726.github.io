import React from 'react';

export default class LoginFields extends React.Component {

	render() {
		
		return (
			<React.Fragment>				              
				<input required type="email"  name="email" placeholder="Email Address*" />
				<input required type="password" name="password" placeholder="Password*" />
				<a href="#">Forgot Password?</a>
			</React.Fragment>
		);
	}
}