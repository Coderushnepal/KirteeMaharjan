import React from "react";

export default function Loader() {
  const style = {
    textAlign: "center",
  };
  return (
    <div style={style}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
