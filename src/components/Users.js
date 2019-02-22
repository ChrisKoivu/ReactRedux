import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './layouts/User.js';


class Users extends Component {
  render() {
    let users;
    if(this.props.users){
      users = this.props.users.map((user,index) => {
        return(      
          <User key = {index} user={user}/>
        )
      });
    }
    return (
      <div>        
          <h1>Users</h1>
          <div
            style={{
              float:"left",
              marginBottom: 50,
              marginLeft:20
          }}
          >        
          </div>        
          {users}
      </div>
    );
  }
  
}

  Users.propTypes = {
    users: PropTypes.array.isRequired
  };

  const mapStateToProps = state => ({
    users: state.users.users
  });
  
  export default connect(mapStateToProps)(Users);