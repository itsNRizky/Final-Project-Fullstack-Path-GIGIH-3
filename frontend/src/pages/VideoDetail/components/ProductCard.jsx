import React from "react";
import useFetch from "../../../hooks/useFetch";

const ProductCard = ({ id }) => {
  const { data, isLoading } = useFetch(`http://localhost:5000/products/${id}`);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            backgroundImage: `url('${"https://source.unsplash.com/random/100×100"}')`,
          }}
          className="rounded-lg min-w-[80px] h-32 shadow-xl relative bg-cover"
        >
          <div className="relative p-3 bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-full w-full rounded-b-lg">
            <div className="absolute bottom-0 left-0 px-1">
              <p className="text-white text-sm">
                Rp. {new Intl.NumberFormat().format(data.price)}
              </p>
              <p className="text-white text-xs">{data.name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
