'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
Parse.initialize('2y3Dme9023s07Ee8v80Pz7b81BYQCANOWB56WVSe', '6SZHDwUqRcVbHIENgilRkVUfQvA3IeyhGoG6a1Fv');

var NavigationComponent = require('./components/NavigationComponent.js');
var MainComponent = require('./components/MainComponent.js');
var AddPostComponent = require('./components/AddPostComponent.js');
var LoginComponent = require('./components/LoginComponent.js');
var RegisterComponent = require('./components/RegisterComponent.js');
var PostDetailsComponent = require('./components/PostDetailsComponent.js');
var UserDetailsComponent = require('./components/UserDetailsComponent.js');

var app = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'': 'main',
		'add-post': 'addPost',
		'login': 'login',
		'register': 'register',
		'post/details/:id': 'postDetails',
		'user/details/:id': 'userDetails'
	},
	main: function() {
		ReactDOM.render(
			<MainComponent router={r} />, 
			app
		);
	},
	addPost: function() {
		if(!Parse.User.current()) {
			this.navigate('login', {trigger: true});
		}
		else {
			ReactDOM.render(<AddPostComponent router={r} />, app);
		}

	},
	login: function() {
		ReactDOM.render(
			<LoginComponent router={r} />, 
			app
		);
	},
	register: function() {
		ReactDOM.render(
			<RegisterComponent router={r} />, 
			app
		);
	},
	postDetails: function(id) {
		ReactDOM.render(
			<PostDetailsComponent router={r} postId={id} />,
			app
		);
	},
	userDetails: function(id) {
		ReactDOM.render(
			<UserDetailsComponent router={r} postId={id} />,
			app
		);
	}
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);