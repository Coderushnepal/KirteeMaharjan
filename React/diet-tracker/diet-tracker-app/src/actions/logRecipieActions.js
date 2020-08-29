import {
  ADD_RECIPIE_TO_DIARY,
  REMOVE_RECIPIE_FROM_DIARY,
  EDIT_RECIPIE_IN_DIARY,
  ERROR_FETCHING_BEERS,
} from "../constants/actions";

export const addRecipie = (info) => {
  return {
    type: ADD_RECIPIE_TO_DIARY,
    payload: info,
  };
};

export const removeRecipie = (info) => {
  return {
    type: REMOVE_RECIPIE_FROM_DIARY,
    payload: info,
  };
};

export const editRecipie = (calorie) => {
  return {
    type: EDIT_RECIPIE_IN_DIARY,
    payload: calorie,
  };
};

export const DataFetchFailure = (error) => {
  return {
    type: ERROR_FETCHING_BEERS,
    payload: error,
  };
};
