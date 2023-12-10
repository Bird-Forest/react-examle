import axios from 'axios';
// export async function getMovies() {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/movie/popular',
//     params: { language: 'en-US', page: '1', sort_by: 'created_at.asc' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTQ1ZTcxMGNhNzQ4NzY0ZDI0Yjc5OTAzYTEwNGVmMCIsInN1YiI6IjY0Y2ZmMjg4NjdlMGY3MDBhZmI0ZWJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9gzm4j-ul4Hn3mykYwVNl4tVCYkLFZWzS3CysM9Jwws',
//     },
//   };

//   const response = await axios.request(options);
//   return response.data.results;
//   //   .then(function (response) {
//   //   console.log(response.data);
//   //   debugger;
//   //   return response.data;
//   // });
//   // .catch(function (error) {
//   //   console.error(error);
//   // });
// }
export async function getMovies() {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: { language: 'en-US', page: '1', sort_by: 'created_at.asc' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTQ1ZTcxMGNhNzQ4NzY0ZDI0Yjc5OTAzYTEwNGVmMCIsInN1YiI6IjY0Y2ZmMjg4NjdlMGY3MDBhZmI0ZWJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9gzm4j-ul4Hn3mykYwVNl4tVCYkLFZWzS3CysM9Jwws',
      },
    };
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '?api_key=f7d7a9b2e374f67b5381a74b61fb7dc2';

// export async function getTrailer(id) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/movie/${id}/videos${API_KEY}&language=en-US`
//     );
//     const trailer = response.data.results.find(
//       video => video.type === 'Trailer'
//     );
//     if (trailer) {
//       const videoSrc = `https://www.youtube.com/embed/${trailer.key}`;
//       return videoSrc;
//     }
//   } catch (error) {
//     console.error(`Error fetching trailer: ${error}`);
//     throw error;
//   }
// }
