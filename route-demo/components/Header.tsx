// components/Header.js

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "grey",
          color: "#fff",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
