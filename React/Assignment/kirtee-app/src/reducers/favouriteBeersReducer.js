import {
  ADD_FAVOURITE_BEERS,
  REMOVE_FAVOURITE_BEERS,
} from "../constants/actions";

const initialState = {
  favouriteBeers: [],
};

export default function favouriteBeersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITE_BEERS:
      return {
        ...state,
        favouriteBeers: [...state.favouriteBeers, action.payload],
      };
    case REMOVE_FAVOURITE_BEERS:
      return {
        ...state,
        favouriteBeers: state.favouriteBeers.filter(
          (beer) => beer.id !== action.payload
        ),
      };
    default:
      return {
        ...state,
      };
  }
}
