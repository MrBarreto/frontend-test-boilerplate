import * as React from 'react';

class FiltersContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;

    const {
      fipeStore: {
        selectedVehicleType,
        brands,
        getBrands,
        selectedBrand,
        setSelectedBrand,
        models,
        selectedModel,
        setSelectedModel,
        vehicleYears,
        selectedVehicleYear,
        setSelectedVehicleYear,
        detailsRedirect,
        setInitialRedirect,
        setFiltersRedirect,
        setDetailsRedirect,
      }
    } = this.props;

    const viewComponentProps = {
      selectedVehicleType,
      brands,
      getBrands,
      selectedBrand,
      setSelectedBrand,
      models,
      selectedModel,
      setSelectedModel,
      vehicleYears,
      selectedVehicleYear,
      setSelectedVehicleYear,
      detailsRedirect,
      setInitialRedirect,
      setFiltersRedirect,
      setDetailsRedirect,
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default FiltersContainer;
