import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import Nav from './Nav.js';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
        <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              React Redux App              
           </TypoGraphy>
           <Nav />
          </Toolbar>         
        </AppBar>
      </div>
    )
  }
}
