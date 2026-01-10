import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>DevOps Assignment</h1>
      <p>{message}</p>
    </main>
  );
}
