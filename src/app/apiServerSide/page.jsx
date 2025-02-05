"use client";
import React, { useEffect, useState } from "react";

// Function to fetch data
async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json.products || [];
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return [];
  }
}

const Page = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
      setLoading(false); 
    };

    fetchData();
  }, []); 

  const handleClick = () => {
    alert("Hi, Bibash");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1 className="text-3xl">Call API</h1>
      {loading ? (
        <p>Loading...</p> 
      ) : products.length > 0 ? (
        products.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Page;