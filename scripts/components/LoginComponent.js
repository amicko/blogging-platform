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
			<div className="loginBox">
				<h1 className="pageHeader">Login</h1>
				<hr />
				{errorElement}
				<form className="form" onSubmit={this.onLogin}>
					<input type="text" ref="username" placeholder="UserName" />
					<br />
					<input type="email" ref="email" placeholder="Email Address" />
					<br />
					<input type="password" ref="password" placeholder="Password" />
					<br />
					<button>Login</button>
				</form>
			</div>
			)
	},
	onLogin: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
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
	}


})



