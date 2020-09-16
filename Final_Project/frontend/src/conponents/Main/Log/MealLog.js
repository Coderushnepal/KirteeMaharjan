import React from "react";

function MealLog({ mealType }) {
  return (
    <section className="box">
      <div className="box-title">
        <span className="box-title__name">{mealType}</span>
      </div>
      <div className="box-content">
        <div className="meal-box">
          <span>Hellpp</span>
        </div>
      </div>
    </section>
  );
}

export default MealLog;
