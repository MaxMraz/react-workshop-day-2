// App.js
import React, { Component } from 'react';
import Headline from '../components/Headline/Headline'
 
class App extends Component {


  render() {
    return (
      <div>
        <Headline />
        <p>This is some basic content.</p>
      </div>
    );
  }
}
export default App;