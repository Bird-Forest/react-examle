import React, { Component } from 'react';
import PokemonError from './PokemonError';
import PokemonPending from './PokemonPending';
import PokemonData from './PokemonData';
import { fetchPokemon } from './pokemon-api';
// import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    // Обов'язкова перевірка!!!!
    if (prevName === nextName) return;

    try {
      this.setState({ status: Status.PENDING });
      const data = await fetchPokemon(nextName);
      console.log(data);
      this.setState({ pokemon: data, status: Status.RESOLVED });
    } catch (error) {
      this.setState({ error, status: Status.REJECTED });
    }
  }

  render() {
    const { pokemon, status } = this.state;
    const { pokemonName } = this.props;
    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    if (status === 'pending') {
      return <PokemonPending pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonError message={'Not found'} />;
      // return <PokemonError message={toast.error('Not found')} />;
    }

    if (status === 'resolved') {
      return <PokemonData pokemon={pokemon} />;
    }
  }
}
