import React, { Component } from 'react';



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
    const { hits } = this.state;

    return (

    <img src={this.state.url}></img>
    
    );
}
}

export default Background;