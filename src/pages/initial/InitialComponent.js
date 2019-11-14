import * as React from "react";
import { CustomButtonIcon } from "../../components";
import "../../style/Initial.css";
import { Redirect } from 'react-router-dom';

class InitialComponent extends React.Component {
  selectVehicleTypeAndRedirect = (vehicleType) => {
    const { setSelectedVehicleType, setFilterRedirect } = this.props;
    setSelectedVehicleType(vehicleType);
    setFilterRedirect(true);
  }

  render() {
    const { btnContents, filterRedirect } = this.props;
    

    return (
      <React.Fragment>

        {filterRedirect && <Redirect to='/filters' />}

        <h2>Initial screen</h2>

        <div className="container-custom-btns">
          {
            btnContents.map(btn => {
              return (
                <CustomButtonIcon
                  icon={btn.icon}
                  text={btn.text}
                  onClick={() => this.selectVehicleTypeAndRedirect(btn.text)}
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
