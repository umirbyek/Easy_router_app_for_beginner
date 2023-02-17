import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCardItem from "./ProductCard";

function Home() {
  const [products, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://63edaae4d466e0c18ba10252.mockapi.io/api/v1/ID")
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  }, []);

  let content = null;
  if (products) {
    content = (
      <div className=" flex flex-col  ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-11/12  bg-white rounded p-6 shadow-2xl mt-5 overflow-hidden "
          >
            <ProductCardItem product={product} />
          
          </div>
        ))}
      </div>
    );
  }
  return <div className="">{content}</div>;
}
export default Home;
