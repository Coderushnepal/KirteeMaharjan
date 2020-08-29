import React, { Component, Fragment } from "react";

import { Header } from "../commons";

export class Diary extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section className="diary__status">
          <div className="diary--fancy">Your Diary</div>
        </section>
      </Fragment>
    );
  }
}

export default Diary;
