import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <h1>Loading...</h1>
      </div>
    )
  );
}
