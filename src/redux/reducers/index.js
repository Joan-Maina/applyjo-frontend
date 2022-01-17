import { combineReducers } from "redux";
import authReducer from "./auth";
import commentsReducer from "./comments";
import postsReducer from "./posts";

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
