import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
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
  location: {
    state: Car
  }
}
interface DispatchProps {
  loadRequest(): void,
}

interface IState {
  inputs: Car,
}

type Props = StateProps & DispatchProps;

class DetailsPage extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputs: {
        id: 0,
        title: '',
        model: '',
        year: 0,
        brand: '',
        color: '',
        km: 0,
        price: 0,
      },
    };
  }

  componentDidMount() {
    // const { loadRequest } = this.props;

    // loadRequest();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    const { location } = nextProps;
    if (location.state) {
      const car = location.state;
      this.setState({
        inputs: {
          id: car.id,
          title: car.title,
          model: car.model,
          year: car.year,
          brand: car.brand,
          color: car.color,
          km: car.km,
          price: car.price,
        },
      });
      console.log(' === car next >>>>', car);
    }
  }

  render() {
    const { inputs } = this.state;

    return (
      <div className="container">
        <LeftBar />
        <div className="containerRight">
          <SearchBar pesquisar />
          <div className="containerResults">

            <div className="titleInfoForm">
              Formulário
            </div>
            <div className="form">
              <div className="line">
                <div className="field">
                  <input
                    type="text"
                    name="titulo"
                    placeholder="Titulo do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          title: event.target.value,
                        },
                      }));
                    }}
                    value={inputs.title}
                  />
                </div>
              </div>
              <div className="line">
                <div className="field">
                  <input
                    type="text"
                    name="modelo"
                    placeholder="Modelo do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          model: event.target.value,
                        },
                      }));
                    }}
                    value={inputs.model}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="ano"
                    placeholder="Ano do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          year: parseInt(event.target.value, 10) || 0,
                        },
                      }));
                    }}
                    value={inputs.year > 0 ? inputs.year : ''}
                  />
                </div>
              </div>
              <div className="line">
                <div className="field">
                  <select name="marca">
                    <option>vaiii</option>
                  </select>
                </div>
              </div>
              <div className="line">
                <div className="field">
                  <input
                    type="text"
                    name="cor"
                    placeholder="Cor do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          color: event.target.value,
                        },
                      }));
                    }}
                    value={inputs.color}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="km"
                    placeholder="Kilometragem do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          km: parseInt(event.target.value, 10) || 0,
                        },
                      }));
                    }}
                    value={inputs.km > 0 ? inputs.km : ''}
                  />
                </div>
              </div>
              <div className="line">
                <div className="field">
                  <input
                    type="text"
                    name="preco"
                    placeholder="Preço do Carro"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      this.setState((prevState) => ({
                        inputs: {
                          ...prevState.inputs,
                          price: parseInt(event.target.value, 10),
                        },
                      }));
                    }}
                    value={inputs.price}
                  />
                </div>
                <div className="field" />
              </div>
              <div className="line">
                <div className="field">
                  <button type="button" className="btnAction">
                    Remover
                  </button>
                  <button type="button" className="btnAction">
                    Cancelar
                  </button>
                </div>
                <div className="field flexEnd">
                  <button type="button" className="btnAction inverter">
                    Salvar
                  </button>
                </div>
              </div>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
