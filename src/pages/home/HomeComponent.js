import * as React from "react";
import '../../style/Home.css';
import { Redirect } from 'react-router-dom';
import RoundedButton from "../../components/RoudendButton";

class HomeComponent extends React.Component {
  render() {

    const {
      welcome,
      initialRedirect,
      setInitialRedirect,
    } = this.props;

    return (
      <React.Fragment>

        {initialRedirect && <Redirect to='/initial' />}

        <div className='home-wrapper-container'>
          <div className='home-bg-container' />
          <section className='home-container'>
            <h2>{welcome}</h2>
            <RoundedButton
              text='Iniciar'
              onClick={() => setInitialRedirect(true)}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
