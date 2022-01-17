import { GETUSERS, LOGIN } from "../types";

const initialState = { user: null, users: null };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem("user")),
      };
    case GETUSERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
