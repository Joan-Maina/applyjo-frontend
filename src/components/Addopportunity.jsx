import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/Add.css";

function Addopportunity() {
  const { user } = JSON.parse(localStorage.getItem("user"));
  const employer = user.email;
  const history = useHistory();
  const [opportunitydata, setOpportunitydata] = useState({
    name: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:9090/posts/addopportunity",
        {
          employer,
          name: opportunitydata.name,
          details: opportunitydata.details,
        }
      );
      console.log(data);
      setLoading(false);
      setError(null);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Check the details");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const postDetails = { ...opportunitydata };
    postDetails[e.target.id] = e.target.value;
    setOpportunitydata(postDetails);
  };
  return (
    <div>
      <div className="top">
        <h1>ADD JOB POST</h1>
      </div>

      {error !== null && <h4 style={{ color: "red" }}>{error}</h4>}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Enter post title</label>
        <input
          value={opportunitydata.name}
          type="text"
          id="name"
          required
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        ></input>

        <label htmlFor="details">add post</label>
        <textarea
          value={opportunitydata.details}
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

export default Addopportunity;
