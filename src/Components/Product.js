import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://63edaae4d466e0c18ba10252.mockapi.io/api/v1/ID/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  }, [id]);

  let content = null;
  if (product) {
    content = (
      <div className=" flex flex-col  ">

          <div  className="w-11/12  bg-white rounded p-6 shadow-2xl mt-5 overflow-hidden ">
        
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <div >
              <img className="rounded" src={product.image} alt={product.name} />
            </div>
            <div className="font-bold text-xl ">${product.price}</div>
            <div>{product.description}</div>
         
          </div>
          

      </div>
    );
  }
  return <div className="" >{content}</div>;
}
export default Product;
