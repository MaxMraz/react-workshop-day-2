import React, { Component } from 'react'
import'./Headline.css'

class Headline extends Component {
    // constructor(props) {
    //     super(props)

    // }


    render(){

        const textColor = this.props.isColor ?
            {'color': 'fuchsia'} : {'color': 'grey'}

        return(
            <section className="Headline">
                <h1 className="Headline__title" style={textColor}>Headline Component</h1>
                <small className="Headline__subtitle">headline subtitle</small>
            </section>
            )
    }
}

export default Headline