import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Link,
} from 'react-router-dom';
import { ApplicationState } from '../../store';
import { Car } from '../../store/ducks/car/types';
import * as CarActions from '../../store/ducks/car/actions';

// -- style
import './style.scss';

// -- components
import LeftBar from '../../components/LeftBar';
import SearchBar from '../../components/SearchBar';

interface StateProps {
  car: Car[]
}
interface DispatchProps {
  loadRequest(): void,
}

type Props = StateProps & DispatchProps;

class Home extends Component<Props> {
  componentDidMount() {
    // const { loadRequest } = this.props;

    // loadRequest();
  }

  listCar = () => (
    <div>
      <Link to="/cadastrar">
        <div className="itemList">
          <div className="line">
            <div className="carName">
              Celta aa
            </div>
            <div className="preco">
              R$ 10.000
            </div>
          </div>
          <div className="line">
            <div className="carInfo">
              Celta • Chevrolet • 106.401 KM
            </div>
            <div className="ano">
              2009
            </div>
          </div>

        </div>
      </Link>
      <div className="divisor" />
    </div>
  )

  listEmpty = () => (
    <div className="emptyList">
      <h1>
        Pesquisa de Veiculos
        <br />
        do
        {' '}
        <span>TradersClub</span>
      </h1>
    </div>
  )

  render() {
    const { car } = this.props;

    return (
      <div className="container">
        <LeftBar />
        <div className="containerRight">
          <SearchBar />
          <div className="containerResults">
            {/* {this.listEmpty()} */}
            {this.listCar()}
            {this.listCar()}
            {this.listCar()}

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  car: state.car.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
