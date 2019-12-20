import React from 'react';



class Pokemon extends React.Component {

    render() {
        return (
            <li className="poke">
                <img className="element" src={this.props.url} alt={this.props.name}></img>
                <h2 className="element">{this.props.name}</h2>
                <span className="element">{this.props.types}</span>
            </li>
        )
    }
}



export default Pokemon