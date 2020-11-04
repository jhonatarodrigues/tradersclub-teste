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
  constructor(props: Props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    // const { loadRequest } = this.props;

    // loadRequest();
  }

  listCar = (car: Car) => (
    <div>
      <Link to="/cadastrar">
        <div className="itemList">
          <div className="line">
            <div className="carName">
              {car.title}
            </div>
            <div className="preco">
              {`R$ ${car.price}`}
            </div>
          </div>
          <div className="line">
            <div className="carInfo">
              {car.model}
              {' '}
              •
              {' '}
              {car.brand}
              {' '}
              •
              {' '}
              {car.km}
              {' '}
              KM
            </div>
            <div className="ano">
              {car.year}
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

  renderResult() {
    const { car } = this.props;
    console.log(' === car', car);

    if (car.length === 0) {
      return (this.listEmpty());
    }

    return (
      car.map((item) => this.listCar(item))
    );
  }

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="containerRight">
          <SearchBar />
          <div className="containerResults">
            {this.renderResult()}

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
