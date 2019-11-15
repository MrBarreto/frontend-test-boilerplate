import * as React from "react";
import DropDownList from '../../components/DropDownList';
import { Redirect } from 'react-router-dom';
import '../../style/Filters.css';
import { RoundedButton, Logo } from "../../components/";

class FiltersComponent extends React.Component {
  constructor(props) {
    super(props);
    const { getBrands } = props;
    getBrands();
  }
  render() {
    const {
      selectedVehicleType,
      brands,
      selectedBrand,
      setSelectedBrand,
      models,
      selectedModel,
      setSelectedModel,
      vehicleYears,
      selectedVehicleYear,
      setSelectedVehicleYear,
      detailsRedirect,

      setInitialRedirect, setFiltersRedirect,
      setDetailsRedirect,
    } = this.props;

    const redirectionsMenager = () => {
      setInitialRedirect(false);
      setFiltersRedirect(false);
      setDetailsRedirect(true);
    }

    const getSelectedVehicleText = () =>
      `${(!!selectedVehicleType) ? selectedVehicleType : 'caminhoes'}`;

    const transformWordsInParagraphs = (words) => {
      const arrWords = words.split(' ');
      return (
        <React.Fragment>
          {arrWords.map(word => <p>{word}</p>)}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>

        {detailsRedirect && <Redirect to='/detail' />}

        <div className='filters-container'>
          {/* <div className='mobi-logo' /> */}
          <Logo />
          <p className='filter-header-previous-label'>Você está na sessão de</p>
          <h3 className='filter-header-label'>{getSelectedVehicleText()}</h3>
          <div className='filters-panel'>
            {transformWordsInParagraphs('Eu quero ver')}
            <p>{` ${getSelectedVehicleText()} `}</p>
            {transformWordsInParagraphs('da marca')}
            <DropDownList
              className='dropdown-brands'
              placeholder={"marca..."}
              value={selectedBrand}
              options={brands}
              isLoading={!brands.length}
              onChange={(selectedBrand) => setSelectedBrand(selectedBrand)}
            />
            {transformWordsInParagraphs('que seja modelo')}
            <DropDownList
              className='dropdown-models'
              placeholder={"modelo..."}
              value={selectedModel}
              options={models}
              isDisabled={!selectedBrand}
              isLoading={!models.length && selectedBrand}
              onChange={(selectedModel) => setSelectedModel(selectedModel)}
            />
            {transformWordsInParagraphs('e que tenha o ano')}
            <DropDownList
              className='dropdown-car-year'
              placeholder={"ano..."}
              value={selectedVehicleYear}
              options={vehicleYears}
              isDisabled={!selectedModel}
              isLoading={!vehicleYears.length && selectedModel}
              onChange={(selectedVehicleYear) => setSelectedVehicleYear(selectedVehicleYear)}
            />
          </div>
          {/* <button
            disabled={!selectedVehicleYear}
            className="filters-confirm-btn"
            onClick={() => setDetailsRedirect(true)}
          >
            Confirmar
          </button> */}
          <RoundedButton
            text='Confirmar'
            disabled={!selectedVehicleYear}
            onClick={() => redirectionsMenager()}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FiltersComponent;
