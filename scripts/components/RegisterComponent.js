var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var errorElement = null;
		if(this.state.error) {
			errorElement = (
				<div className="errorBox">
					<p className="error">{this.state.error}</p>
				</div>
			);
		}
		return (
			<div className="registerBox">
				<h1 className="pageHeader">Register</h1>
				<hr />
				{errorElement}
				<form className="form" onSubmit={this.onRegister}>
					<input type="text" ref="username" placeholder="UserName" />
					<br />
					<input type="email" ref="email" placeholder="Email Address" />
					<br />
					<input type="password" ref="password" placeholder="Password" />
					<br />
					<button>Register</button>
				</form>
			</div>
			)
	},
	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.username.value,
				password: this.refs.password.value,
				email: this.refs.email.value
			},
			{
				success: (u) => {
					this.props.router.navigate('', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
		this.refs.username.value = ''
		this.refs.password.value = ''
		this.refs.email.value = ''
	}


})



