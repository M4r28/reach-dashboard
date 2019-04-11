import React, { Component } from 'react';
import "../App.css";


class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: [],
        };
    }


componentDidMount() {
    fetch('https://source.unsplash.com/random')
    .then((response)=> { this.setState({ url: response.url })})
}

render() {
    const { url } = this.state;

    return (

    <img className= "backgroundImage" src={this.state.url}/>
    
    );
}
}

export default Background;