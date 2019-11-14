import * as React from 'react';
import { FaCarSide, FaMotorcycle, FaTruck } from 'react-icons/fa';
import VehicleTypeEnum from '../../enums/VehicleTypeEnum';

class InitialContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      fipeStore: {
        setSelectedVehicleType,
        setFilterRedirect,
        filterRedirect
      }
    } = this.props;

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

    const viewComponentProps = {
      setSelectedVehicleType,
      setFilterRedirect,
      filterRedirect,
      btnContents
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default InitialContainer;
