import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import { fetchcomments, fetchposts, login } from "../redux/actions";
import "../styles/Blog.css";

function Blog() {
  const { user } = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const history = useHistory();
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  useEffect(() => {
    setLoading(true);
    setError(null);
    const getPosts = async () => {
      try {
        const { data } = await axios.post("http://localhost:9090/posts/fetch");
        dispatch(fetchposts(data));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getPosts();
  }, [dispatch]);
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const checkComments = async (postid) => {
    try {
      const { data } = await axios.post(
        "http://localhost:9090/comments/fetch",
        { postid }
      );
      dispatch(fetchcomments(data));

      history.push("/comments", postid);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <h2 className="title">Entertain</h2>
      <div className="blog">
        {posts?.map((post) => (
          <div key={post.postId} className="post">
            <h3>{post.postTitle}</h3>
            <p>{post.details}</p>

            <button onClick={() => checkComments(post.postId)}>
              View comments
            </button>
          </div>
        ))}
        {display ? (
          <>
            <div className="add">
              <Add />
              <h2 onClick={(e) => handleDisplay(e)}>X</h2>
            </div>
          </>
        ) : (
          <button onClick={(e) => handleDisplay(e)}>Create post</button>
        )}
      </div>
    </>
  );
}

export default Blog;
