import {
  LOGIN,
  FETCHPOSTS,
  FETCHCOMMENTS,
  FETCHOPPORTUNITIES,
  GETUSERS,
} from "../types";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const fetchposts = (data) => {
  return {
    type: FETCHPOSTS,
    payload: data,
  };
};

export const fetchcomments = (data) => {
  return {
    type: FETCHCOMMENTS,
    payload: data,
  };
};
export const fetchopportunites = (data) => {
  return {
    type: FETCHOPPORTUNITIES,
    payload: data,
  };
};
export const getusers = (data) => {
  return {
    type: GETUSERS,
    payload: data,
  };
};
