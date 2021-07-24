import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
	const { id, title, body } = props.data
	return (
		<div className={classes.post}>
			<small>{id}</small>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	)
}

export default Post
