import React from 'react';

export default class LoginFields extends React.Component {

	render() {
		const onClick = () => {
			alert('You actually wanna get started?');
			this.props.login();
		}
		return (
			<React.Fragment>
				<fieldset>                
					<input required className="gecko-input" type="email"  name="email" placeholder="Email Address*" />
					<input required className="gecko-input" type="password" name="password" placeholder="Password*" />
				</fieldset>
				<a className="gecko_sign-up_password" href="#">Forgot Password?</a>
			</React.Fragment>
		);
	}
}