var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var leftLinks = [];
		var rightLinks = [];

		leftLinks.push(this.createNavLink('', 'Main'));

		if(!Parse.User.current()) {
			rightLinks.push(this.createNavLink('login', 'Login'));
			rightLinks.push(this.createNavLink('register', 'Register'));
		}
		else {
			leftLinks.push(this.createNavLink('add-post', 'Create Post'));
			rightLinks.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
		}
		return (
			<div className="navigationBox">
				<div className="navBar">
					<ul className="leftNavList">
						{leftLinks}
					</ul>
					<ul className="rightNavList">
						{rightLinks}
					</ul>
				</div>
			</div>
			)
	},
	logout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('login', {trigger: true});
	},
	createNavLink: function(url, label) {
		var currentUrl = Backbone.history.getFragment();
		if(currentUrl === url) {
			return (<li className="active"><a href={'#'+url}>{label}</a></li>);
		}
		else {
			return (<li><a href={'#'+url}>{label}</a></li>);
		}
	}


})



