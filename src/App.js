import React from 'react';
import UserCard from './components/User'
import Nav from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            .then(res =>{
                console.log(res.data);
                this.setState({user: res.data})})
            .catch(err => console.log(err))
    }

  render(){
  return (
    <div className="App">
      <Nav username={this.state.user.login}/>
      <header className="App-header">
        <p>
            Kirk is the Main!
            {console.log(this.state.user.avatar_url)}
        </p>
        <UserCard
            imgurl={this.state.user.avatar_url}
        />
      </header>
    </div>
    );
  };
}

export default App;
