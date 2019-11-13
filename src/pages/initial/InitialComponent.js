import * as React from "react";
import { CustomButtonIcon } from "../../components";
import "../../style/Initial.css";
import { Redirect } from 'react-router-dom';

class InitialComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false }
  }

  selectVehicleTypeAndRedirect = (vehicleType) => {
    const { setSelectedVehicleType } = this.props;
    setSelectedVehicleType(vehicleType);
    this.setState({ redirect: true });
  }

  render() {
    const { btnContents } = this.props;
    const { redirect } = this.state;

    return (
      <React.Fragment>

        {redirect && <Redirect to='/filters' />}

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
