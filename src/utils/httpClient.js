const API = "https://api.themoviedb.org/3";
// const API_TOKEN = process.env.REACT_APP_API_TOKEN

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjA0NTJkODJiYjRhNWU1MDkzODM0ODkwYWNmZThmMyIsInN1YiI6IjYzMDViYWU0Yjg3YWVjMDA3ZGRhMjJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DpBuzzQOEYG61GccEEkQ4QhI4Z3JSAf_f0Y_ICuKJSA" ,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

//http://api.themoviedb.org/3/discover/movie?api_key=6b0452d82bb4a5e5093834890acfe8f3