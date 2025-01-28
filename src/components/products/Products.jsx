import React, { useEffect, useState } from "react";
import { request } from "../../api";
import Loading from "../loading/Loading";
import ProductModal from "./product-modal";


const Products = () => {
  const limit = 5
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const [oneItem, setOneItem] = useState(null)


  useEffect(() => {
    setLoading(true);
    request
      .get("/products", {
        params: {
          limit,
          skip: count * limit
        }
      })
      .then((res) => setProducts([...products, ...res.data.products]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return (
    <div className="">
      <div className="container mx-auto grid grid-cols-5 gap-3">
        {products?.map((product) => (
          <div key={product.id} className="p-4 shadow-md rounded-md">
            <img
              src={product.thumbnail}
              className="h-[250px]"
              alt={product.title}
              onClick={() => setOneItem(product)}
            />
            <h2 className="font-bold">{product.title}</h2>
            <button className="bg-slate-400 rounded-md px-4 py-1 text-white font-bold mt-2 hover:bg-slate-500 duration-300 active:scale-95 duration-300">Show details</button>
          </div>
        ))}
      </div>

      {loading && <Loading count={limit} />}

      <button className="block mx-auto mt-4 bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 duration-300 active:scale-95 duration-300" onClick={()=> setCount(count + 1)}>See more</button>
      {
        oneItem &&
        <ProductModal oneItem={oneItem} setOneItem={setOneItem}/>
      }
  </div>
  );
};

export default Products;
