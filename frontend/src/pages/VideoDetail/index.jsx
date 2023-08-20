import React, { useState } from "react";
import CommentList from "./CommentList";
import ProductList from "./ProductList";
import Header from "../components/Header";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const VideoDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`http://localhost:5000/videos/${id}`);
  const [comments, setComments] = useState([]);
  const commentsHandler = (comment) => {
    setComments(comment);
  };
  return (
    <>
      <Header />
      <div className="flex w-screen border relative">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <iframe
              className="w-full h-[88vh]"
              src={data.url + "?autoplay=1"}
            ></iframe>
            <div className="absolute bottom-0 pb-5 px-2 bg-gradient-to-t from-[rgba(0,0,0,0.6)] w-full">
              <CommentList videoId={id} comments={comments} />
              <ProductList products={data.products} />
              <CommentInput videoId={id} commentsHandler={commentsHandler} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default VideoDetail;
