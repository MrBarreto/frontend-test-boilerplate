import * as React from "react";
import { connect } from "../../store";

import FiltersContainer from "./FiltersContainer";
import FiltersComponent from "./FiltersComponent";

const Container = connect(
    FiltersContainer,  ["fipeStore"]
);

function FiltersMain(props) {
  return <Container viewComponent={FiltersComponent} {...props} />;
}

export default FiltersMain;