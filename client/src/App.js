import React, { Component } from 'react';
import logo from './logo.svg';


class App extends Component {
  state = { songs: [] };

  componentDidMount() {
    fetch('/api/songs')
      .then( res => res.json())
      .then( songs => this.setState({ songs }))
  }

  render(){
    return(
      <div>
      Hello
      </div>
    )
  }

}

export default App;
