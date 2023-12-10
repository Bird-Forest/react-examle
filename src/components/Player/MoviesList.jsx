import React, { useEffect, useState } from 'react';
import { getMovies } from './movies-api';
import { Loading } from 'components/Loader/Loading';

export default function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // if (!movies) return;
    const favoriteMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();
        console.log(data);
        //   console.log(data.results);
        setMovies(data);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    favoriteMovies();
  }, []);
  console.log(movies);
  // const Arr = Array.isArray(movies) && movies.length > 0;
  return (
    <div>
      {isLoading && <Loading />}
      {/* {Arr && movies.map()} */}
    </div>
  );
}
