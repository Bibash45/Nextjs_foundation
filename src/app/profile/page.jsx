import Image from "next/image";
import React from "react";

const page = () => {
  return <div className="global-text">
    <Image src={`https://glowglide.shop/cdn/shop/files/Untitled_design__34_-removebg-preview_1.png?v=1703970223&width=535`} alt='beauty' height={300} width={300}
    layout="fixed"
    priority
    />
  </div>;
};

export default page;
