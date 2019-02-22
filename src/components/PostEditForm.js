import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../actions/actions';
import { updatePost } from '../actions/actions';
import { fetchUsers } from '../actions/actions';
import { fetchPosts } from '../actions/actions';


import {
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";

class PostEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      body: ''
    };    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
      this.setState(
        {
          id: this.props.post.id,
          title: this.props.post.title,
          body: this.props.post.body
        }
      )
      
  }

  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();  
    const post = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    };

    this.props.updatePost(post);
    this.props.history.push('/posts'); 
  }
  
  
 

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "50%" }} onSubmit={this.onSubmit}>
            <h1>Edit Post</h1>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="title">Title</InputLabel>
              <Input id="title" 
                name="title" 
                onChange={this.onChange}
                value={this.state.title} 
                type="text" 
              />
            </FormControl>           
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="body">Body</InputLabel>
              <Input id="body" 
                name="body"
                onChange={this.onChange}
                value={this.state.body}
                multiline rows={10} 
              />
            </FormControl>
            <Button variant="contained" 
              color="primary" 
              size="medium"
              type="submit"
            >
              Submit
            </Button>
        </form>          
      </div>      
    );
  }
}

PostEditForm.propTypes = {
editPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.posts,
    post: state.posts.post,
  });
  
  const mapDispatchToProps = dispatch => {
    return { 
      // retrieving users to get author names
      fetchPosts: () => {
        dispatch(fetchPosts())
      },     
      updatePost: (item) => {
          dispatch(updatePost(item))
      },
      editPost: (item) => {
        dispatch(editPost(item))
      },
      // retrieving users to get author names
      fetchUsers: () => {
        dispatch(fetchUsers())
      },
    };
  };  
export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);

    