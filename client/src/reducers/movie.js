import { MOVIE_FAIL, MOVIE_NOWPLAYING, DETAIL_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  movie: {},
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_NOWPLAYING:
      return { ...state, movies: payload, loading: false };
    case DETAIL_MOVIE:
      return { ...state, movie: payload, loading: false };
    case MOVIE_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};
