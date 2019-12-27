import { DETAIL_MOVIE, MOVIE_FAIL, MOVIE_NOWPLAYING } from "./types";
import { moviesApi } from "../api";

export const nowPlaying = () => async dispatch => {
  try {
    const {
      data: { results }
    } = await moviesApi.nowPlaying();
    dispatch({
      type: MOVIE_NOWPLAYING,
      payload: results
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FAIL
    });
  }
};
export const detail = match => async dispatch => {
  try {
    const {
      params: { id }
    } = match;
    const { data } = await moviesApi.detail(id);
    console.log(id, data);
    dispatch({
      type: DETAIL_MOVIE,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FAIL
    });
  }
};
