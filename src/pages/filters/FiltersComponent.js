import * as React from "react";
import DropDownList from '../../components/DropDownList/index';
import { Redirect } from 'react-router-dom';
import '../../style/Filters.css';

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
      carYears,
      selectedCarYear,
      setSelectedCarYear,
      detailsRedirect,
      setDetailsRedirect,
    } = this.props;

    const getSelectedVehicleText = () =>
      `${(!!selectedVehicleType) ? selectedVehicleType : "caminhoes"}`;

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

        {detailsRedirect && <Redirect to='/details' />}

        <div className='filters-container'>
          <div className='mobi-logo' />
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
              value={selectedCarYear}
              options={carYears}
              isDisabled={!selectedModel}
              isLoading={!carYears.length && selectedModel}
              onChange={(selectedCarYear) => setSelectedCarYear(selectedCarYear)}
            />
          </div>
          <button
            disabled={!selectedCarYear}
            className="filters-confirm-btn"
            onClick={() => setDetailsRedirect(true)}
          >
            Confirmar
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FiltersComponent;
