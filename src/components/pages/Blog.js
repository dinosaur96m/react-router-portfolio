import React, { Component } from 'react'
import Post from '../partials/Post'

class Blog extends Component {
    render () {
        let allPosts = this.props.postsArray.map((post, i) => {
            return(<Post p={post} key={i}/>)
        })
        return (
            <div className="pageDiv">
                <h1 className="pageTitle">Bob's Blog</h1>
                {allPosts}
            </div>
        )
    }
}

export default Blog