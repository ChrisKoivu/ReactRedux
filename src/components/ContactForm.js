import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createContact } from '../actions/actions';

import {
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
    onSubmit(e) {
        e.preventDefault();        
        const contact = {
          name: this.state.name,
          email: this.state.email,
          message:this.state.message
        };    
        this.props.createContact(contact);
        this.setState({
            name:'',
            email:'',
            message:''
        });
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
          <h1>Contact Form</h1>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" 
            type="text" 
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" 
            type="email" 
            name="email"
            onChange={this.onChange}
            value={this.state.email}
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message" 
            multiline rows={10} 
            name="message"
            onChange={this.onChange}
            value={this.state.message}            
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

ContactForm.propTypes = {
    createContact: PropTypes.func.isRequired
};
    
export default connect(null, { createContact })(ContactForm);
