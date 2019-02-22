import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Posts from './Posts';
import Users from './Users';
import PostForm from './PostForm.js';
import PostEditForm from './PostEditForm.js';
import ContactForm from './ContactForm.js';

export default class Router extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact/add' component={ContactForm}/>
            <Route path='/posts/add' component={PostForm}/>
            <Route path="/posts/edit/:id" component={PostEditForm} />
            <Route path='/posts' component={Posts}/>
            <Route path='/users' component={Users}/>      
        </Switch>
    )
  }
}


