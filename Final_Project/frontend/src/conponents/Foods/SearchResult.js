import React from "react";
import PropTypes from "prop-types";

function SearchResult({ item }) {
  const {
    title,
    measurement,
    calories,
    grams,
    protein,
    fat,
    total_carbs,
  } = item;
  return (
    <div className="search-result-item">
      <div className="search-result-item__title">{title}</div>
      <div className="search-result-item__measure">
        <span>measurement: {measurement} </span>
        <span>grams: {grams}</span>
      </div>
      <div className="search-result-item__nutrition">
        <span>Calories : {calories}</span>
        <span>Fat : {!fat ? "-" : fat + "g"} </span>
        <span>Protein : {!protein ? "-" : protein + "g"}</span>
        <span>Carbs :{total_carbs + "g"} </span>
      </div>
    </div>
  );
}

SearchResult.propTypes = {
  item: PropTypes.object,
};

export default SearchResult;
