import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { LoggedOut, LoggedIn, LoginButton } from '@solid/react'

const auth = require('solid-auth-client')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      id: ''
    }
  }

  componentWillMount() {
    auth.trackSession(session => {
      if (!session) {
        console.log('The user is not logged in')
        this.setState({
          loggedIn: false,
          id: ''
        })
      }
      else {
        console.log(`The user is ${session.webId}`)
        console.log(session);
        this.setState({
          loggedIn: true,
          id: session.webId
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <LoggedOut>
          <h1>To use this project you must log in to Solid.</h1>
          <LoginButton popup="popup.html" />
        </LoggedOut>
        <LoggedIn>
          <Header loggedIn={this.state.loggedIn} id={this.state.id} />
          <Body />
        </LoggedIn>
      </div>
    );
  }
}

export default App;
