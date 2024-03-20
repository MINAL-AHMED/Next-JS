"use client";
import { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>This is Dashboard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Welcome {name}</p>
    </div>
  );
};

export default Dashboard;
