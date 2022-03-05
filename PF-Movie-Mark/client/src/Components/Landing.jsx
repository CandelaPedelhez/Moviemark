import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>
        <h1>Welcome to Movie Market</h1>
      </div>
      <div>
        <Link to="/home">
          <button>Enter</button>
        </Link>
      </div>

      <p>
        This e-commerce was created by students of the full stack developer
        career for the Henry academy, we hope you enjoy it.
      </p>
    </div>
  );
}
