import React, { Component } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Auth from './components/auth/Auth';
import AuthContext from '../src/components/auth/AuthContext';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.setToken = sessionToken => {
      localStorage.setItem('token', sessionToken);
      this.setState({ sessionToken: sessionToken });
    };
    this.state = {
      sessionToken: '',
      setToken: this.setToken
    };
  }

  componentWillMount() {
    const sessionToken = localStorage.getItem('token');
    if (sessionToken && !this.state.sessionToken) {
      this.setState({ sessionToken: sessionToken });
    }
  };

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return <Header clickLogout={this.logout}/>
    } else {
      return <Auth />
    }
  };

  render() { //lifecycle method which is a feature of component
    return( //can only return 1 thing in 1 single div
      <Router>
        <AuthContext.Provider value={this.state}>
        <div className="App">
          {this.protectedViews()}
          <Footer />
        </div>
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;

// isUser: false,

  // changeUserStatus = () => this.setState({ isUser: !this.state.isUser }) //whatever isUser is, change to the opposite

  // authViewShow = () => { //will automatically show signup form
  //   if (this.state.isUser) {
  //     return (
  //       <Login toggleForm={ this.changeUserStatus }/>
  //     )
  //   } else {
  //     return (
  //       <Signup toggleForm={ this.changeUserStatus }/>
  //     )
  //   }
  // }

/* {this.authViewShow()} */