"use client";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <p>
        Please go back to the <Link href="/">home page</Link> and try again.
      </p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 20px;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
