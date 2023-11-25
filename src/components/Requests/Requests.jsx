import React, { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default class Requests extends Component {
  state = {
    pokemon: null,
    pokemonName: '',
  };
  handleSubmitForm = pokemonName => {
    console.log(pokemonName);
    this.setState({ pokemonName });
  };
  render() {
    return (
      <div>
        <PokemonForm newName={this.handleSubmitForm} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        {/* <ToastContainer autoClose={2000} /> */}
      </div>
    );
  }
}
