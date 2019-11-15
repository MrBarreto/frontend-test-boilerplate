import * as React from "react";
import { CustomButtonIcon, Logo } from "../../components";
import "../../style/Initial.css";
import { Redirect } from 'react-router-dom';

class InitialComponent extends React.Component {
  constructor(props) {
    super(props);
    const {
      incrementInitializationsCounter,
      clearSelectedVehicleType,
      clearSelectedBrand,
      clearSelectedModel,
      clearSelectedVehicleYear,
    } = this.props;

    incrementInitializationsCounter();
    clearSelectedVehicleType("")
    clearSelectedBrand();
    clearSelectedModel();
    clearSelectedVehicleYear();
  }

  selectVehicleTypeAndRedirect = (vehicleType) => {
    const { setSelectedVehicleType, setFiltersRedirect } = this.props;
    setSelectedVehicleType(vehicleType);
    setFiltersRedirect(true);
  }

  render() {
    const { btnContents, filtersRedirect, initializationsCounter } = this.props;

    return (
      <React.Fragment className='initial-container'>

        {filtersRedirect && <Redirect to='/filters' />}

        <header className='initial-header'>
          <Logo />
          <p>Escolha uma das opções abaixo para prosseguir com a filtragem</p>
        </header>
        <section className="container-custom-btns">
          {
            btnContents.map(btn => {
              return (
                <CustomButtonIcon
                  icon={btn.icon}
                  text={btn.text}
                  onClick={() => this.selectVehicleTypeAndRedirect(btn.text)}
                />
              );
            })
          }
        </section>
        <footer className='initial-footer'>
          {
            (initializationsCounter >= 3) &&
            <p>Eu posso fazer isso o dia todo! <span role='img' aria-label='wink'>😉</span></p>
          }

        </footer>
      </React.Fragment>
    );
  }
}

export default InitialComponent;
