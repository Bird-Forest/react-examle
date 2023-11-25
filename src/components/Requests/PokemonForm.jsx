import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };
  handleNameChange = evt => {
    this.setState({ pokemonName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.error('Enter pokemon name');
      return;
    }
    this.props.newName(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            name="pokemonName"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} />
            Найти
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}
