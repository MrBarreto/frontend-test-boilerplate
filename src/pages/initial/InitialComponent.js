import * as React from "react";
import { CustomButtonIcon } from "../../components";
import "../../style/Initial.css";

class InitialComponent extends React.Component {
  render() {
    const { setSelectedVehicleType, btnContents } = this.props;

    return (
      <React.Fragment>
        <h2>Initial screen</h2>

        <div className="container-custom-btns">
          {
            btnContents.map(btn => {
              return (
                <CustomButtonIcon
                  icon={btn.icon}
                  text={btn.text}
                  onClick={() => setSelectedVehicleType(btn.text)}
                />
              );
            })
          }
        </div>

      </React.Fragment>
    );
  }
}

export default InitialComponent;
