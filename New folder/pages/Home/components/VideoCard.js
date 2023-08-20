import React from 'react'

const VideoCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${"https://source.unsplash.com/random/100×100"}')`,
      }}
      className="bg-[url] w-40 bg-base-100 p-4 shadow-xl m-2 relative"
    >
      <div className="relative bottom-0">
        <h2>Judul video</h2>
      </div>
    </div>
  );
};

export default VideoCard;
