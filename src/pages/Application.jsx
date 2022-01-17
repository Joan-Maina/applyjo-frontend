import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchopportunites } from "../redux/actions";
import Addopportunity from "../components/Addopportunity";
import Footer from "../components/Footer";
import "../styles/Application.css";

function Application() {
  const dispatch = useDispatch();
  console.log("ko");
  const [addopportunity, setAddopportunity] = useState(false);
  useEffect(() => {
    const getopportunities = async () => {
      const { data } = await axios.get(
        "http://localhost:9090/posts/fetchopportunites"
      );
      dispatch(fetchopportunites(data));
    };
    getopportunities();
  }, [dispatch]);
  const { opportunities } = useSelector((state) => state.posts);
  console.log(opportunities);
  return (
    <div>
      <Navbar />
      <div className="opportunities">
        {opportunities?.map((opportunity) => (
          <div className="opportunity">
            <h3>{opportunity.name}</h3>
            <p>{opportunity.details}</p>
            <p>
              Send CV to:<br></br>
              {opportunity.employer}
            </p>
          </div>
        ))}
      </div>
      {addopportunity ? (
        <Addopportunity />
      ) : (
        <button className="addjob" onClick={() => setAddopportunity(true)}>
          Add jobs
        </button>
      )}
      <Footer />
    </div>
  );
}

export default Application;
