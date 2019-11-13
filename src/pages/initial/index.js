import * as React from "react";
import { connect } from "../../store";

import InitialContainer from "./InitialContainer";
import InitialComponent from "./InitialComponent";

const Container = connect(
  InitialContainer,  ["fipeStore"]
);

function InitialMain(props) {
  return <Container viewComponent={InitialComponent} {...props} />;
}

export default InitialMain;