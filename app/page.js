//Week 2 Assignment - Editing the Root Page
//Angelica Pekas CPRG-306-D
//000906248

import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        CPRG 306 - WEB DEVELOPMENT 2 - ASSIGNMENTS
      </h1>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="/week-2">WEEK 2 ASSIGNMENT</a>
      </p>
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="/week-3">WEEK 3 ASSIGNMENT</a>
      </p>
    </div>
  );
};

export default Page;
