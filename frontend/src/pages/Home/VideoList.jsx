import VideoCard from "./components/VideoCard";
import useFetch from "./../../hooks/useFetch";
import { Link } from "react-router-dom";

const VideoList = () => {
  const { data, isLoading } = useFetch("http://localhost:5000/videos/");
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-wrap gap-2 mx-2 justify-between sm:justify-start absolute top-24 overflow-y-auto">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data.map((d) => (
          <Link key={d._id} to={`/${d._id}`}>
            <VideoCard title={d.title} url={d.url} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoList;
