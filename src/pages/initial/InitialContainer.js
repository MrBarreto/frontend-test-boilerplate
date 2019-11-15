import * as React from 'react';
import { FaCarSide, FaMotorcycle, FaTruck } from 'react-icons/fa';
import VehicleTypeEnum from '../../enums/VehicleTypeEnum';

class InitialContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      fipeStore: {
        filtersRedirect,
        initializationsCounter,
        incrementInitializationsCounter,
        setFiltersRedirect,
        setSelectedVehicleType,
        clearSelectedVehicleType,
        clearSelectedBrand,
        clearSelectedModel,
        clearSelectedVehicleYear,
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
      btnContents,
      initializationsCounter,
      incrementInitializationsCounter,
      filtersRedirect,
      setFiltersRedirect,
      setSelectedVehicleType,
      clearSelectedVehicleType,
      clearSelectedBrand,
      clearSelectedModel,
      clearSelectedVehicleYear,
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default InitialContainer;
