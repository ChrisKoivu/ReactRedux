import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return(
    <List component="nav">
    <ListItem component="div">
        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
            <Link to='/'>Home</Link>
       </TypoGraphy>
        </ListItemText>


        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
            <Link to='/posts'>Posts</Link>
       </TypoGraphy>
        </ListItemText>


        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
            <Link to='/contact/add'>Contact</Link>
       </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
            <Link to='/users'>Users</Link>
       </TypoGraphy>
        </ListItemText>
    </ListItem >

</List>
    )
  }
}
