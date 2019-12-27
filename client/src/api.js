import axios from "axios";

export const moviesApi = {
  nowPlaying: () =>
    axios.get("https://api.themoviedb.org/3/movie/now_playing/", {
      params: {
        api_key: "0d4e32f77bbeed2b8a43e9b720fc7782",
        language: "ko-kr"
      }
    }),
  detail: id =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: "0d4e32f77bbeed2b8a43e9b720fc7782",
        language: "ko-kr",
        append_to_response: "videos"
      }
    })
};
