import React from 'react';

export default class LoginFields extends React.Component {

	render() {
		const onClick = () => {
			alert('You actually wanna get started?');
			this.props.login();
		}
		return (
			<React.Fragment>				        
					<input required className="gecko-input small" type="text" name="first" placeholder="First Name*" />
					<input required className="gecko-input small" type="text" name="last" placeholder="Last Name*" />
					<input required className="gecko-input" type="email" name="email" placeholder="Email Address*" />
					<input required className="gecko-input" type="password" name="password" placeholder="Set A Password*" />			
			</React.Fragment>
		);
	}
}