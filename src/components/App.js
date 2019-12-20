import React from 'react';
import '../stylesheet/App.css';
import PokeList from './pokeList';
import data from '../data/data'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: data }
  }
  render() {
    return (

      <PokeList data={this.state.pokemons} />
    )
  }
}

export default App;
