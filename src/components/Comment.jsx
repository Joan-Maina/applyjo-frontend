import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchcomments } from "../redux/actions";
import "../styles/comment.css";
import Navbar from "./Navbar";

function Comment(id) {
  const { comments } = useSelector((state) => state.comments);
  console.log(comments);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [details, setDetails] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div className="comment" key={comment.commentId}>
              <p>{comment.details}</p>
            </div>
          ))
        ) : (
          <p>no comments</p>
        )}
        <button>Comment</button>
      </div>
    </div>
  );
}

export default Comment;
