import React from "react";
import { Link } from "react-router-dom";

import Home from "../Main/Home";

export default function FourOhFour() {
  const divstyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "	#ede6db",
    color: "#313131",
  };
  const style = {
    marginTop: " 1.7rem",
  };
  return (
    <div style={{ divstyle }}>
      <h1>404</h1>
      <h2 style={{ style }}>Page not found</h2>
      <p style={{ style }}>
        Go back to{" "}
        <Link path="/" component={Home}>
          Home
        </Link>
      </p>
    </div>
  );
}
