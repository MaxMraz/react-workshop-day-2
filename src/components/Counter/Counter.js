import React, { Component } from 'react'
import CounterButton from './CounterButton'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return(
            <div>
                <p>Count is: {this.state.count}</p>
                <CounterButton increment={this.increment} text={'Add'}/>
                <CounterButton increment={this.decrement} text={'Subtract'} />
            </div>
        )
    }
}

export default Counter