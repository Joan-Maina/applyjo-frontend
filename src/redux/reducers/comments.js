import { FETCHCOMMENTS } from "../types";

const initialState = { comments: null };

const commentsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHCOMMENTS:
      return {
        ...state,
        comments: payload,
      };

    default:
      return state;
  }
};
export default commentsReducer;
