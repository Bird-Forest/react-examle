import axios from 'axios';

export async function fetchPokemon(nextName) {
  // try {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${nextName}`
  );
  console.log(response.data);
  return response.data;
  // } catch (error) {
  //   console.error(error.message);
  //   return error(`Not Found`);
  // }
}
