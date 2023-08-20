import React from "react";
import useFetch from "../../../hooks/useFetch";

const Comment = ({ userId, comment }) => {
  const { data, isLoading } = useFetch(`http://localhost:5000/users/${userId}`);
  return (
    <div className="mb-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3 className="text-xs">{data.username}:</h3>
          <p>{comment}</p>
        </>
      )}
    </div>
  );
};

export default Comment;
