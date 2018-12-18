// App.js
import React, { Component } from 'react';
import Headline from '../components/Headline/Headline'
import Counter from '../components/Counter/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }

    //To bind THIS context to how we want it
    // this.increment = this.increment.bind(this)
  }


  render() {
    return (
      <div>
        <Headline />
        <Counter />
      </div>
    );
  }
}
export default App;