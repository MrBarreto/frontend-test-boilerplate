import * as React from 'react';

class FilterContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;

    const {
      fipeStore: { 
        brands,
        models,
        carYears,
        selectedBrand,
        selectedModel,
        carInformation,
        selectedCarYear,
        setSelectedModel,
        setSelectedBrand,
        setSelectedCarYear
       }
    } = this.props;

    const viewComponentProps = {
      brands,
      models,
      carYears,
      selectedBrand,
      selectedModel,
      carInformation,
      selectedCarYear,
      setSelectedModel,
      setSelectedBrand,
      setSelectedCarYear
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default FilterContainer;
