var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		post: null
	// 	}
	// },
	// componentWillMount: function() {
	// 	var query = new Parse.Query(PostModel);
	// 	query
	// 	.get(this.props.postId)
	// 	.then(
	// 		(post) => {
	// 			this.setState({post: post});
	// 		},
	// 		(err) => {
	// 			console.log(err);
	// 		}
	// 	);
	// },
	render: function() {
		return(
			<div>
				<div className="picBox">
					<img className="profilePic"src={Parse.User.current().get('profilePicUrl')} />
					<div>Username: {Parse.User.current().get('username')}</div>
				</div>
				<div>Email Address: {Parse.User.current().get('email')}</div>
			</div>
		)
	}
})