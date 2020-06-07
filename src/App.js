import React from 'react';
import UserCard from './components/User'
import FollowersList from './components/FollowersList'
import Nav from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            username:'',
            user:[],
            followers:'',
            viewFollowers:[]
        }
    }

    fetchUser = (e) =>{
        e.preventDefault()
        const axios = require('axios');
        axios
            .get(`https://api.github.com/users/${this.state.username}`)
            .then(res =>{console.log(res.data); this.setState({user: res.data})})
            .catch(err => console.log(err))
        }

    handleChanges = (e) =>{
        //how to make e.target.name generic
       this.setState({ ...this.state, [e.target.name]: e.target.value})
    }

    fetchFollowers = (e) =>{
        e.preventDefault()
        const axios = require('axios')
        axios
            .get(`https://api.github.com/users/${this.state.followers}/followers`)
            .then( res => {this.setState({viewFollowers: res.data})})
            .catch(err => console.log(err))
        console.log(this.state.followers)
        console.log(this.state.viewFollowers)
    }

  render(){
      console.log(this.state.followers)
      console.log(this.state.username)
  return (
    <div className="App">
      <Nav username={this.state.user.login}/>
      <header className="App-header">
          <p>
              <input
                  type="text"
                  name="username"
                  placeholder="Enter your username:"
                  value={this.state.username}
                  onChange={this.handleChanges}
              />
              <button onClick={this.fetchUser}>Fetch User</button>
          </p>
        <p>
            <input
                  type="text"
                  name="followers"
                  placeholder="Enter your username:"
                  value={this.state.followers}
                  onChange={this.handleChanges}
            />
            <button onClick={this.fetchFollowers}>Fetch Followers</button>
        </p>
        <UserCard
            name={this.state.user.name}
            followers={this.state.user.followers}
            imgurl={this.state.user.avatar_url}
        />
              </header>
              <FollowersList viewFollowers={this.state.viewFollowers}/>
    </div>
    );
  };
}

export default App;
