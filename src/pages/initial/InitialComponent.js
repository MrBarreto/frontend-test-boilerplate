import * as React from "react";
import { CustomButtonIcon } from "../../components";
import "../../style/Initial.css";

class InitialComponent extends React.Component {
  render() {
    const { initial, btnContents } = this.props;

    console.log("initial: ", initial);

    return (
      <React.Fragment>
        <h2>{initial}</h2>

        <div className="container-custom-btns">
          {
            btnContents.map(btn => <CustomButtonIcon icon={btn.icon} text={btn.text} />)
          }
        </div>

        {/* <CustomButtonIcon
          icon={<FaCarSide/>}
          text={"Carro"}
        /> */}

      </React.Fragment>
    );
  }
}

export default InitialComponent;
