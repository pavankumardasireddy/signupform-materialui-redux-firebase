import React, { Component } from 'react';
//import Nav from './Components/nav';
import SignUpContainer from '../src/containers/SignUpContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <SignUpContainer />
      </div>
    );
  }
}

export default App;
