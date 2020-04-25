import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import Login from './components/Login'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Login to see friends.</h1>
        <div className='nav'>
          <Link to='/friends'>Friends</Link>
        </div>
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friends' component={FriendsList} />
          <Route component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
