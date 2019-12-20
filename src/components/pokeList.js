import React from 'react';
import Pokemon from './pokemon';

const PokeList = props => {
    return <div>
        <h1 className="title"> Mi lista de pokemon</h1>
        <ul className="list">
            {props.data.map(index => {

                return <li>
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

export default PokeList;