import * as React from 'react';
import { FaCarSide, FaMotorcycle, FaTruck } from 'react-icons/fa';
import VehicleTypeEnum from '../../enums/VehicleTypeEnum';

class InitialContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore: { initial }
    } = this.props;
    const viewComponentProps = {
      initial
    };

    const btnContents = [
      {
        icon: <FaCarSide />,
        text: VehicleTypeEnum.car
      },
      {
        icon: <FaMotorcycle />,
        text: VehicleTypeEnum.motorcycle
      },
      {
        icon: <FaTruck />,
        text: VehicleTypeEnum.truck
      }
    ];

    return <ViewComponent {...viewComponentProps} btnContents={btnContents} />;
  }
}

export default InitialContainer;
