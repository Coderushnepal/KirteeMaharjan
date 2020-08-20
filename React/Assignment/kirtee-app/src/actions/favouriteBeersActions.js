// import http from "../utils/http";
import { fetchBeerById } from "../services/beerService";

import {
  ADD_FAVOURITE_BEERS,
  REMOVE_FAVOURITE_BEERS,
  ERROR_FETCHING_BEERS,
} from "../constants/actions";

export const AddFavouriteBeers = (favouriteBeer) => {
  return {
    type: ADD_FAVOURITE_BEERS,
    payload: favouriteBeer,
  };
};
export const RemoveFavourites = (favouriteBeerId) => {
  return {
    type: REMOVE_FAVOURITE_BEERS,
    payload: favouriteBeerId,
  };
};

export const DataFetchFailure = (error) => {
  return {
    type: ERROR_FETCHING_BEERS,
    payload: error,
  };
};

export const AddFavourites = (favouriteBeer) => {
  return async (dispatch) => {
    // const filtered = favouriteBeer.id % 2 ? favouriteBeer.id : "jpthohai";
    try {
      const data = await fetchBeerById(favouriteBeer.id);
      console.log(data);
      dispatch(AddFavouriteBeers(favouriteBeer));
      dispatch(DataFetchFailure(null));
    } catch (error) {
      dispatch(DataFetchFailure(error.response.data.data[0].msg));
    }
  };
};
