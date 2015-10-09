var React = require('react');
var ReactDOM = require('react-dom');
var PostModel = require('../models/AddPostModel.js');
var moment = require('moment')

module.exports = React.createClass({

	render: function() {
		return (
			<div>
				<h1 className="pageHeader">Add a Post</h1>
				<hr />
				<form className="form" onSubmit={this.onAddPost}>
					<input type="text" ref="title" placeholder="Title" />
					<br />
					<input type="text" ref="image" placeholder="Image Link" />
					<br />
					<input type="text" ref="description" placeholder="Description" />
					<br />
					<input type="text" ref="author" placeholder="Author" />
					<br />
					<input type="text" ref="category" placeholder="Category" />
					<br />
					<button>Add Post</button>
				</form>
			</div>
			)
	},
	onAddPost: function(e) {
		e.preventDefault();
		var newPost = new PostModel({
			title: this.refs.title.value,
			image: this.refs.image.value,
			description: this.refs.description.value,
			author: this.refs.author.value,
			category: this.refs.category.value,
			date: moment().format('MMMM Do YYYY, h:mm a')
		});

		newPost.save();
		console.log('Post has been added');
	}


})



