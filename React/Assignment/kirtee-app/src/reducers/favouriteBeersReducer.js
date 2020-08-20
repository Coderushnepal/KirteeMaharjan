import {
  ADD_FAVOURITE_BEERS,
  REMOVE_FAVOURITE_BEERS,
  ERROR_FETCHING_BEERS,
} from "../constants/actions";

const initialState = {
  favouriteBeers: [],
  error: null,
};

export default function favouriteBeersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE_BEERS:
      return {
        ...state,
        // error: null,
        favouriteBeers: [...state.favouriteBeers, action.payload],
      };
    case REMOVE_FAVOURITE_BEERS:
      return {
        ...state,
        favouriteBeers: state.favouriteBeers.filter(
          (beer) => beer.id !== action.payload
        ),
        // error: null,
      };
    case ERROR_FETCHING_BEERS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
