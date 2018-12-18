import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props){
//         super(props)
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.increment}>{this.props.text}</button>
//             </div>
//         )
//     }
// }

const CounterButton = (props) => {
        return(
            <button onClick={props.increment}>{props.text}</button>
        )
    }

export default CounterButton