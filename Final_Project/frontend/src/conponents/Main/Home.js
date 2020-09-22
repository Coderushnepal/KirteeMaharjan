import React from "react";
import { Redirect } from "react-router-dom";

import * as routes from "../../constants/routes";
function Home() {
  return <Redirect to={routes.TODAY_LOG} />;
}

export default Home;
