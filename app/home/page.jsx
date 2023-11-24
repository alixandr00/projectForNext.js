import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"home/me"}></Link>
    </div>
  );
};

export default Home;
