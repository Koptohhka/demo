import React from 'react';

import './css/App.css';
import './css/start-screen.css'
import './css/login-screen.css';

import StartScreen from './components/main/Start-screen.js';
import LoginScreen from './components/authorization/Login-screen.js';

class App extends React.Component {
  state = {
    auntificated: false
  }

  userIdData = {};

  async toSignInUser(user) {
    const request = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const content = await request.json();
    if (request.status === 200) {
      this.userIdData = content;
      this.setState({
        auntificated: true
      })
    }
  }

  toCheckUserAuthorization() {
    if (localStorage.getItem('userData')) {
      if (this.state.auntificated) {
        return <StartScreen userIdData={this.userIdData} />;
      }
      this.toSignInUser(JSON.parse(localStorage['userData']));
    } 
    return <LoginScreen />;
  }

  render() {
    return (
      <div>
        {this.toCheckUserAuthorization()}
      </div>
    )
  }
}
export default App;