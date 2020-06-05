import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user:[],
        }
    }


    componentDidMount(){
        const axios = require('axios');
        axios
            .get("https://api.github.com/users/maketaller")
            .then(res =>{this.setState({user: res.data})})
            .catch(err => console.log(err))
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Kirk is the Main!
        </p>
      </header>
    </div>
    );
  };
}

export default App;
