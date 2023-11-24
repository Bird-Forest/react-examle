// import errorImage from './error.jpg';

export default function PokemonError({ message }) {
  return (
    <div role="alert">
      <p>{message}</p>
    </div>
  );
}
