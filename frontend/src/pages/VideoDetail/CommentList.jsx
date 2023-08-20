import React from "react";
import useFetch from "../../hooks/useFetch";
import Comment from "./components/Comment";

const CommentList = ({ videoId, comments }) => {
  const { data, isLoading } = useFetch(
    `http://localhost:5000/comments/${videoId}`
  );
  return (
    <div className="px-2 text-white w-1/2 flex flex-col justify-end h-40 overflow-hidden">
      {isLoading ? (
        <p>Loading...</p>
      ) : comments.length === 0 ? (
        data.map((d) => (
          <Comment key={d._id} userId={d.user_id} comment={d.value} />
        ))
      ) : (
        comments.map((c) => (
          <Comment key={c._id} userId={c.user_id} comment={c.value} />
        ))
      )}
    </div>
  );
};

export default CommentList;
