import React from "react";

// import "./Loader.css";

export default function Loader() {
  return (
    <div style={{ width: "100%" }}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
