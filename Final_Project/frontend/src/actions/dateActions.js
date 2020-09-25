import { SET_DATE, RESET_DATE } from "../constants/actions";

export const SetDate = (newDate) => {
  return {
    type: SET_DATE,
    payload: newDate,
  };
};

export const ResetDate = () => {
  return {
    type: RESET_DATE,
  };
};
