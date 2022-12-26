import { Component } from 'react';
import PokemonForm from '../../components/Pokemon/PokemonForm'
import PokemonInfo from '../../components/Pokemon/PokemonInfo';

export default class PokemonView extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
      </>
    );
  }
}