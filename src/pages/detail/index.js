import * as React from "react";
import { connect } from "../../store";

import DetailContainer from "./DetailContainer";
import DetailComponent from "./DetailComponent";

const Container = connect(
  DetailContainer, ["fipeStore"]
);

function DetailMain(props) {
  return <Container viewComponent={DetailComponent} {...props} />;
}

export default DetailMain;
