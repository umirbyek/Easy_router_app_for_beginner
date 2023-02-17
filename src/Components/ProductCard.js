import React from "react";
import { Link } from "react-router-dom";

function ProductCardItem({ product }) {
  return (
    <div className=" flex flex-col">
      <div className="w-11/12  bg-white rounded p-6 shadow-2xl mt-5 overflow-hidden ">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div>
          <img
            className="rounded"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="font-bold text-xl">${product.price}</div>
        <div>{product.description}</div>
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </div>
  );
}
export default ProductCardItem;
