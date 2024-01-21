//Editing the Root Page for the App
//Angelica Pekas CPRG-306-F
//000906248

import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>
        CPRG 306-F: Web Development 2 - Assignments
      </h1>
      <h2>Angelica Pekas - 000906248</h2>
      <ul>
        <li>
          <Link href="/week-2">Week 2 Assignment</Link>
        </li>
      </ul>
    </main>
  );
}

