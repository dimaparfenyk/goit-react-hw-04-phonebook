import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import {PokemonForm} from '../../components/Pokemon/PokemonForm'
import {PokemonInfo} from '../../components/Pokemon/PokemonInfo';

export const PokemonView = () => {
  const [pokemonName, setPokemonName] = useState('')

  //  const handleFormSubmit = pokemonName => {
  //     setPokemonName( pokemonName );
  //   };

  return (
    <>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
};