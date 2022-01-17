import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/Add.css";
function Add() {
  const history = useHistory();
  const [postdata, setPostdata] = useState({
    postTitle: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:9090/posts/add", {
        postdata,
      });
      setLoading(false);
      setError(null);

      history.push("/blog");
    } catch (error) {
      setLoading(false);
      setError("Check the details");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const postDetails = { ...postdata };
    postDetails[e.target.id] = e.target.value;
    setPostdata(postDetails);
  };
  return (
    <div>
      <div className="top">
        <h1>ADD POST</h1>
      </div>

      {error !== null && <h4 style={{ color: "red" }}>{error}</h4>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="postTitle">Enter post title</label>
        <input
          value={postdata.postTitle}
          type="text"
          id="postTitle"
          required
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        ></input>
        <label htmlFor="details">add post</label>
        <textarea
          value={postdata.details}
          onChange={(e) => handleChange(e)}
          id="details"
          required
          placeholder="Enter post..."
        ></textarea>
        <button>Post</button>
      </form>
    </div>
  );
}

export default Add;
