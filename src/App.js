import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import * as Api from './api/api.js';
import Router from './components/Router';
import Header from './components/layouts/Header.js';
import store from './store';

class App extends Component {

  componentWillMount() {
    Api.getUsers();
    Api.getPosts();
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          
          <Header />
          <Router />
                 
        </div>
      </Provider>
    );
  }
}

export default App;