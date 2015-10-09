var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/AddPostModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return{
			posts: []
		};
	},
	componentWillMount: function() {
		var query = new Parse.Query(PostModel);
		query
		.descending('createdAt')
		.find()
		.then(
			(posts) => {
				this.setState({posts: posts});
			},
			(err) => {
				console.log(err)
			}
		)

	},
	render: function() {
		var postElements = this.state.posts.map(function(post) {
			return (
				<a className="detailLink" href={'#post/details/' + post.id}>
					<div className="mainPostBox">
						<img className="mainImage" src={post.get('image')} />
						<div className="mainTitle">{post.get('title')}</div>
						<div className="mainDescription">{post.get('description').substr(0, 140)}</div>
						<div>{post.get('date')}</div>
					</div>
				</a>
			)
		})
		return (
			<div>
				<h1 className="pageHeader">Main Page</h1>
				<hr />
				{postElements}
			</div>
			)
	}


})



