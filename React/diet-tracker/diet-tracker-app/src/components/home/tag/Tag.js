import React from "react";

import "./Tag.css";

function Tag({ tagName, tagClickHandler }) {
  // console.log(tagName, tagClickHandler);

  return <button onClick={tagClickHandler}>{tagName}</button>;
}

export default Tag;
