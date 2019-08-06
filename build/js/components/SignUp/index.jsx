import React from 'react';

export default class SignUp extends React.Component {

	render() {
		const submitForm = () => {
			event.preventDefault();			
			this.props.login();
		}
		const viewLogin = () => {
			this.props.changeView();
		}
		const viewSignup = () => {
			this.props.changeView();
		}
		return (
			<section className='gecko_sign-up'>
				<section className="gecko_sign-up__form-toggle">
					<button disabled={(this.props.view === 'signup') ? 'disabled' : '' } onClick={viewLogin}>Sign Up</button>
					<button disabled={(this.props.view === 'login') ? 'disabled' : '' } onClick={viewSignup}>Log In</button>
				</section>
				<h1 className='gecko_sign-up_title'>
					{this.props.title}
				</h1>
				<form onSubmit={submitForm}>
					{this.props.children}
					<button className="gecko_sign-up_form_submit" value="Get Started">Get Started</button>
				</form>
			</section>
		);
	}
}
