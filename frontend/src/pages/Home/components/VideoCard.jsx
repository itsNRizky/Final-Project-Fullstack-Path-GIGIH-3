import React from "react";

const VideoCard = ({ title, url }) => {
  const urlSplit = url.split("/");
  const id = urlSplit.pop();
  return (
    <div
      style={{
        backgroundImage: `url('https://img.youtube.com/vi/${id}/mqdefault.jpg')`,
      }}
      className="rounded-lg w-40 h-72 shadow-xl relative bg-center bg-cover"
    >
      <div className="absolute bottom-0 p-3 bg-gradient-to-t from-[rgba(0,0,0,0.8)] from-10% w-full rounded-b-lg">
        <h2 className="text-white">{title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
