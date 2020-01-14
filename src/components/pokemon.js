import React from 'react';
import PropTypes from 'prop-types';
class Pokemon extends React.Component {
    render() {
        return (
            <div className="poke">
                <img className="element" src={this.props.url} alt={this.props.name}></img>
                <h2 className="element">{this.props.name}</h2>
                <ul className="types">
                    {this.props.types.map((type, index) => <li key={index}>{type}</li>)}
                </ul>
            </div>
        )
    }
}
Pokemon.propTypes = {
    name: PropTypes.string,
    types: PropTypes.array,
}

export default Pokemon