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
        carYears,
        selectedCarYear,
        setSelectedCarYear,
        detailsRedirect,
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
      carYears,
      selectedCarYear,
      setSelectedCarYear,
      detailsRedirect,
      setDetailsRedirect,
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default FiltersContainer;
