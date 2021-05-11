import { FECTH_DRINKS_ERROR, FECTH_DRINKS_START, FECTH_DRINKS_SUCCESS, SEARCH_DRINKS_START, SET_SEARCH_QUERY } from "../../constants"
import { AppState } from "../../types/AppState";


type ActionType = {
  type: string,
  payload: any
}

const initialState: AppState = {
  isLoading: false,
  drinks: [],
  query: undefined
}

function drinksReducer(state = initialState, action: ActionType) {
  switch (action.type) {


    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload.query
      };
    case SEARCH_DRINKS_START:
      return {
        ...state,
        isLoading: true
      };
    case FECTH_DRINKS_START:
      return {
        ...state,
        isLoading: true
      };

    case FECTH_DRINKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drinks: action.payload.drinks
      };

    case FECTH_DRINKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
}

export default drinksReducer;
