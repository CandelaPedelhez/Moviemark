import React from "react";

export default function CardReview({ username, score, description }) {
  return (
    <div>
        <h1> {score} </h1>
        <h2>{username}</h2>
        <p>{description}</p>
    </div>
  );
}
