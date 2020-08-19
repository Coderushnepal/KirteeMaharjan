import {
  ADD_FAVOURITE_BEERS,
  REMOVE_FAVOURITE_BEERS,
} from "../constants/actions";

export const AddFavourites = (favouriteBeer) => {
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
