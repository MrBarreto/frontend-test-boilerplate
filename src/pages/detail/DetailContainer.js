import * as React from "react";

class DetailContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;

    const {
      fipeStore: {
        vehicleDetails,
        getVehicleDetails,
        initialRedirect,
        setInitialRedirect,
        setDetailsRedirect,
        setSelectedVehicleType,
        setSelectedBrand,
        setSelectedModel,
        setSelectedVehicleYear,

        clearSelectedVehicleType,
        clearSelectedBrand,
        clearSelectedModel,
        clearSelectedVehicleYear,
      }
    } = this.props;

    const viewComponentProps = {
      vehicleDetails,
      getVehicleDetails,
      initialRedirect,
      setInitialRedirect,
      setDetailsRedirect,
      setSelectedVehicleType,
      setSelectedBrand,
      setSelectedModel,
      setSelectedVehicleYear,

      clearSelectedVehicleType,
      clearSelectedBrand,
      clearSelectedModel,
      clearSelectedVehicleYear,
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default DetailContainer;
