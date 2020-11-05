import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Link,
} from 'react-router-dom';
import { ApplicationState } from '../../store';
import { Car } from '../../store/ducks/car/types';
import * as CarActions from '../../store/ducks/car/actions';

// -- style
import './styles.scss';

interface StateProps {
  car: Car[]
}
interface DispatchProps {
  loadRequest(): void,
  loadSuccess(data: Car[]): void,
}

interface OwnProps {
  pesquisar?: boolean
}
interface IState {
  inputSearch: string,
  mock: Car[],
}

type Props = StateProps & DispatchProps & OwnProps;

class SearchBar extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputSearch: '',
      mock: [],
    };
  }

  componentDidMount() {
    const mock = [
      {
        brand: 'Chevrolet',
        color: 'Azul marinho',
        id: 1,
        km: 106041,
        model: 'Celta',
        price: 11772.22,
        title: 'Celta Azul 2005 Ar e Direção',
        year: 2005,
      },

    ];

    this.setState({
      mock,
    }, () => {
      this.setInfo();
    });
  }

  setInfo() {
    const { loadSuccess } = this.props;
    const { inputSearch, mock } = this.state;
    const lowerInputSearch = inputSearch.toLowerCase();

    if (inputSearch.length > 0) {
      const info = mock.filter((car) => {
        if (
          car.brand.toLowerCase().indexOf(lowerInputSearch) >= 0
         || car.title.toLowerCase().indexOf(lowerInputSearch) >= 0
         || car.color.toLowerCase().indexOf(lowerInputSearch) >= 0
         || car.model.toLowerCase().indexOf(lowerInputSearch) >= 0
        ) {
          return car;
        }
        return null;
      });

      if (info.length > 0) {
        loadSuccess(info);
      } else {
        loadSuccess([]);
      }
    } else {
      loadSuccess([]);
    }
  }

  render() {
    const { inputSearch } = this.state;
    const { pesquisar } = this.props;

    return (
      <div className="searchBar">
        <input
          type="text"
          name="search"
          placeholder="Pesquise por um veículo"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            this.setState({
              inputSearch: event.target.value,
            }, () => {
              this.setInfo();
            });
          }}
          autoComplete="false"
          value={inputSearch}
        />
        {pesquisar ? (
          <Link to="/" className="linkExpand">
            <button type="button">
              Pesquisar
            </button>
          </Link>
        ) : (
          <Link to="/cadastrar" className="linkExpand">
            <button type="button">
              Cadastrar
            </button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  car: state.car.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
