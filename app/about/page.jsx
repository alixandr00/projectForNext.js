import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href={"about/me"}>Me</Link>
    </div>
  );
};

export default AboutPage;
