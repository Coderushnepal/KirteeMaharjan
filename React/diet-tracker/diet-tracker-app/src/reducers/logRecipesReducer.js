import {
  ADD_RECIPIE_TO_DIARY,
  REMOVE_RECIPIE_FROM_DIARY,
  EDIT_RECIPIE_IN_DIARY,
} from "../constants/actions";

const initialState = {
  loggedRecipes: [],
  recipeCalorieCount: 0,
  error: null,
};

const logRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPIE_TO_DIARY:
      return {
        ...state,
        loggedRecipes: [...state.loggedRecipes, action.payload],
        recipeCalorieCount:
          state.recipeCalorieCount + action.payload.nutrition[0].amount,
      };

    case REMOVE_RECIPIE_FROM_DIARY:
      return {
        ...state,
        loggedRecipes: state.loggedRecipes.filter(
          (item) => item.id !== action.payload.id
        ),
        recipeCalorieCount:
          state.recipeCalorieCount - action.payload.nutrition[0].amount,
      };

    case EDIT_RECIPIE_IN_DIARY:
      return {
        ...state,
        recipeCalorieCount: state.recipeCalorieCount + action.payload,
      };

    default:
      return state;
  }
};

export default logRecipesReducer;
