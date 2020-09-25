import { RESET_DATE, SET_DATE } from "../constants/actions";

const initialState = {
  date: new Date().toLocaleDateString(),
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return {
        date: action.payload,
      };
    case RESET_DATE:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
      };
  }
}
