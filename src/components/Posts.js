import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions/actions';
import Post from './layouts/Post.js';
import { Link } from 'react-router-dom'

class Posts extends Component {
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }


  // user component needs to be loaded first for the values
  // to be read
  getAuthorName(userId){    
    let author;
    // search the users array and return author
    if(
        author = this.props.users.find(user => {      
           return user.id === userId;     
        })
    )
    {
        // if we found the author above, get their name
        return 'By ' + author.name;
    } else {
      return null;
    }
  }
  
  render() {
    let posts;
    if(this.props.posts){
      posts = this.props.posts.map((post,index) => {
        let author = this.getAuthorName(post.userId);
        return(      
          <Post key = {index} 
            post={post} 
            history={this.props.history}
            onDelete={this.props.deletePost} 
            onEdit={this.props.editPost}
            author={this.getAuthorName(post.userId)}
          />
        )
      });
    }
    return (
      <div>
        
        <h1>Posts</h1>
        <div
           style={{
            float:"left",
            marginBottom: 50,
            marginLeft:20
        }}
        >
        <Link to='/posts/add'  className="addPost"> Add Post </Link>
        </div>
        
        {posts}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  newPost: PropTypes.object
};



const mapStateToProps = state => ({
  posts: state.posts.posts,
  //updatedPosts: state.posts.updatedPosts,
  // get users from store, so we can get the
  // name of the post authors
  users: state.users.users
});

const mapDispatchToProps = dispatch => {
  return {
    deletePost: (item) => {
      dispatch(deletePost(item))
    },
    editPost: (item) => {
      dispatch(editPost(item))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
//export default connect(mapStateToProps, { fetchPosts, deletePost })(withStyles(styles)(Posts));

