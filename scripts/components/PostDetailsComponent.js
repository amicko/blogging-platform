var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/AddPostModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			post: null
		}
	},
	componentWillMount: function() {
		var query = new Parse.Query(PostModel);
		query
		.get(this.props.postId)
		.then(
			(post) => {
				this.setState({post: post});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var content = <div>Loading...</div>;

		if(this.state.post) {
			content = (
				<div className="detailsPostBox">
					<div className="detailsTitle">{this.state.post.get('title')}</div>
					<div className="detailsDate">{this.state.post.get('date')}</div>
					<div className="imageContainer">
						<img className="detailsImage" src={this.state.post.get('image')} />
					</div>
					<div className="detailsDescription">{this.state.post.get('description')}</div>
					<div className="detailsAuthor">{this.state.post.get('author')}</div>
					<div className="detailsCategory">Category: {this.state.post.get('category')}</div>
				</div>
			)
		}
		return(
			<div>
				<h1 className="pageHeader">Post Details</h1>
				{content}
			</div>
		)
	}
})