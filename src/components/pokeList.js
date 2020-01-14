import React from 'react';
import Pokemon from './pokemon';
import PropTypes from 'prop-types';

const PokeList = props => {
    return <div>
        <h1 className="title"> Mi lista de pokemon</h1>
        <ul className="list">
            {props.data.map(index => {
                return <li key={index.id}>
                    <Pokemon
                        name={index.name}
                        types={index.types}
                        url={index.url}
                    />
                </li>
            }
            )}
        </ul>
    </div>
}
PokeList.propTypes = {
    name: PropTypes.string,
    types: PropTypes.array,
    data: PropTypes.array,
}


export default PokeList;