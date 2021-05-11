import { FECTH_DRINKS_ERROR, FECTH_DRINKS_START, FECTH_DRINKS_SUCCESS, SET_SEARCH_QUERY } from "../../constants";
import { fetchData } from "../../clients/drinkClient";


export const setSearchQueryActionThunk = (query: string) => (dispatch: (arg0: { type: string; payload: { query: string; }; }) => void) => {
  return dispatch({ type: SET_SEARCH_QUERY, payload: { query: query } });
}

export const fecthDrinksActionThunk = (query: string) => async (dispatch: (arg0: { type: string; payload?: { drinks: any; } | { errorMessage: any; }; }) => void) => {
  dispatch({ type: FECTH_DRINKS_START });
  return await fetchData(query).then(response => {
    if (response) {
      return dispatch({ type: FECTH_DRINKS_SUCCESS, payload: { drinks: response.drinks } });
    }
  }).catch(error => {
    return dispatch({ type: FECTH_DRINKS_ERROR, payload: { errorMessage: error } })
  });

}

