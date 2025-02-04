"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let json = await response.json();
      setData(json["products"]);
    };
    fetchData();
}, []);

  console.log(data);

  return <div>
    <h1 className="text-3xl">Call api</h1>
    {
        data.map((item,index)=>{
            return <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
            </div>
        })
    }
  </div>;
};

export default page;
