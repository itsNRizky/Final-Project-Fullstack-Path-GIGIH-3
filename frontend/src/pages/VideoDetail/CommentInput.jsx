import React, { useState } from "react";
// import io from 'socket.io-client'
import { useAuth } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";

// const socket = io('http://localhost:5000')

const CommentInput = ({ videoId, commentsHandler }) => {
  const { isLoggedIn, authUser } = useAuth();
  const [comment, setComment] = useState("");

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      commentSubmitHandler();
    }
  };

  const commentSubmitHandler = () => {
    fetch("http://localhost:5000/comments/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: comment,
        user_id: authUser._id,
        video_id: videoId,
      }),
    }).then(() => {
      fetch(`http://localhost:5000/comments/${videoId}`)
        .then((res) => res.json())
        .then((res) => commentsHandler(res));
      // socket.emit('sendComment', {})
      setComment("");
    });
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder={isLoggedIn ? "Ketikan komen..." : "Masuk untuk komen"}
        disabled={!isLoggedIn}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={handleEnterPress}
        className="p-3 text-white border placeholder:text-white border-white bg-transparent rounded-3xl w-full"
      />
      <button onClick={commentSubmitHandler}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/windows/100/ffffff/sent.png"
          alt="sent"
        />
      </button>
    </div>
  );
};

export default CommentInput;
