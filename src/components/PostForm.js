import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

import {
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();  
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createPost(post);
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
            <h1>Add Post</h1>
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

PostForm.propTypes = {
createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);

    