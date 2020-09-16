import React, { Component } from "react";
import PropTypes from "prop-types";

export class StatusBoard extends Component {
  render() {
    return (
      <div className="Board container">
        <div className="Board-card">
          <div className="Board-card__title"> Calorie</div>
          <div className="Board-card__figures">
            <div className="chart">
              Chart Goes here
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="label">
              <span> Rem: 200</span>
              <span> Goal: 200</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatusBoard;
