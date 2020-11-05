import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { Car } from '../../store/ducks/car/types';
import * as CarActions from '../../store/ducks/car/actions';

// -- style
import './style.scss';

// -- components
import LeftBar from '../../components/LeftBar';
import SearchBar from '../../components/SearchBar';

interface StateProps {
  car: Car[],
  carFiltered: Car[],
  location: {
    search: string,
  }
}
interface DispatchProps {
  loadRequest(): void,
}

type Props = StateProps & DispatchProps;

interface IState {
  search: string,
}

class Home extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const trataSearch = decodeURI(location.search.replace('?search=', ''));

    this.setState({
      search: trataSearch,
    });
  }

  listCar = (car: Car) => (
    <div>
      <Link to={{
        pathname: '/cadastrar',
        state: car,
      }}
      >
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
    const { carFiltered } = this.props;

    if (carFiltered.length === 0) {
      return (this.listEmpty());
    }

    return (
      carFiltered.map((item) => this.listCar(item))
    );
  }

  render() {
    const { search } = this.state;

    return (
      <div className="container">
        <LeftBar />
        <div className="containerRight">
          <SearchBar search={search} />
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
  carFiltered: state.car.filtered,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
