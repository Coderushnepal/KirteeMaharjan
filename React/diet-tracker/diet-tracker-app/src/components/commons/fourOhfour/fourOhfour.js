import React from "react";

function fourOhfour() {
  const style = {
    backgroundColor: "rgb(63, 68, 72,0.8)",
    color: white,
  };

  const white = {
    color: "white",
    padding: "20px",
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ style }}
    >
      <h1 style={white}>404</h1>
      <h2 style={white}>Page not Found</h2>
    </div>
  );
}

export default fourOhfour;
