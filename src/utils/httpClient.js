const API =process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer" + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

//http://api.themoviedb.org/3/discover/movie?api_key=6b0452d82bb4a5e5093834890acfe8f3