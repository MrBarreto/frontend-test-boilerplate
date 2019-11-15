import * as React from "react";
import '../../style/Detail.css';
import { Loading, RoundedButton, Logo } from '../../components';
import { Redirect } from 'react-router-dom';

class DetailComponent extends React.Component {
  constructor(props) {
    super(props);
    const { getVehicleDetails } = this.props;
    getVehicleDetails();
  }
  render() {

    const { vehicleDetails,
      setInitialRedirect,
      setDetailsRedirect,
      initialRedirect,

      clearSelectedVehicleType,
      clearSelectedBrand,
      clearSelectedModel,
      clearSelectedVehicleYear,
    } = this.props;

    const redirectMenager = () => {
      setDetailsRedirect(false);
      setInitialRedirect(true);

      clearSelectedVehicleType();
      clearSelectedBrand();
      clearSelectedModel();
      clearSelectedVehicleYear();
    }

    return (
      <React.Fragment >

        {initialRedirect && <Redirect to='/initial' />}

        {(vehicleDetails === undefined) && <Loading />}
        
        <div className='detail-container'>
          <header className='detail-logo'>
            <Logo />
          </header>
          <p>Detalhes do veículo</p>
          <section className='info-container'>
            <div>
              <h4>Valor</h4>
              <h3>{!!vehicleDetails ? vehicleDetails.Valor : 'R$ 9999,99'}</h3>
            </div>
            <div className='side-organization'>
              <div>
                <h4>Marca</h4>
                <h4>{!!vehicleDetails ? vehicleDetails.Marca : 'XXX 196 - Y255'}</h4>
              </div>
              <div>
                <h4>Ano</h4>
                <h4>{!!vehicleDetails ? vehicleDetails.AnoModelo : '2019'}</h4>
              </div>
            </div>
            <div>
              <h4>Modelo</h4>
              <h4>{!!vehicleDetails ? vehicleDetails.Modelo : 'Hue 1001 haus - 300Gt'}</h4>
            </div>
          </section>
          <section>
            <RoundedButton
              text='Reiniciar'
              onClick={() => redirectMenager()}
            />
          </section>
        </div>


      </React.Fragment>
    );
  }
}

export default DetailComponent;
