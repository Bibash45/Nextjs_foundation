import Menu from "@/components/Menu";
import React from "react";

const page = () => {
  return (
    <div>
      <Menu />
      This is admin page
      <h1
        className="text-center text-3xl"
        style={{
          fontFamily: "var(--font-raleway)",
        }}
      >
        API KEY : {process.env.NEXT_PUBLIC_API_KEY}
      </h1>
      <h1
        style={{
          fontFamily: "var(--font-sunshine)",
        }}
        className="text-center text-3xl mt-3"
      >
        sunshine font
      </h1>
    </div>
  );
};

export default page;
