import { FETCHOPPORTUNITIES, FETCHPOSTS } from "../types";

const initialState = { posts: null, opportunities: null };

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHPOSTS:
      return {
        ...state,
        posts: payload,
      };
    case FETCHOPPORTUNITIES:
      return {
        ...state,
        opportunities: payload,
      };
    default:
      return state;
  }
};
export default postsReducer;
