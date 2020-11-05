import React, { Component, ChangeEvent } from 'react';
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
import ModalInfo from '../../components/ModalInfo';

interface StateProps {
  car: Car[],
  location: {
    state: Car
  }
}
interface DispatchProps {
  loadRequest(): void,
  loadSuccess(data: Car[]): void,
}

interface IState {
  inputs: Car,
  modal: {
    active: boolean,
    mensagem: string,
    success: boolean,
  }
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
      modal: {
        active: false,
        mensagem: '',
        success: false,
      },
    };
  }

  componentDidMount() {
    this.preenchInfo();
  }

  preenchInfo() {
    const { location } = this.props;
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
    }
  }

  save() {
    const { car, loadSuccess } = this.props;
    const { inputs } = this.state;
    let newCar = [...car];
    let mensagemModal = 'Seu carro foi adicionado com sucesso';
    if (inputs.id) {
      // -- edit
      const updateCar = car.map((item) => {
        if (item.id === inputs.id) {
          return inputs;
        }

        return item;
      });
      newCar = updateCar;
      mensagemModal = 'Seu carro foi editado com sucesso';
    } else {
      // -- increment
      newCar = [
        ...car,
        {
          ...inputs,
          id: car.length ? car.length + 1 : 0,
        },
      ];
    }

    loadSuccess(newCar);
    this.setState({
      modal: {
        active: true,
        mensagem: mensagemModal,
        success: true,
      },
    }, () => {
      setTimeout(() => {
        this.setState({
          modal: {
            active: false,
            mensagem: '',
            success: false,
          },
        });
      }, 6000);
    });
  }

  removeCar() {
    const { car, loadSuccess } = this.props;
    const { inputs } = this.state;

    const newCar = car.filter((item) => {
      if (item.id === inputs.id) {
        return false;
      }
      return true;
    });

    loadSuccess(newCar);
    this.setState({
      modal: {
        active: true,
        mensagem: 'Seu carro foi removido com sucesso',
        success: true,
      },
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
    }, () => {
      setTimeout(() => {
        this.setState({
          modal: {
            active: false,
            mensagem: '',
            success: false,
          },
        });
      }, 6000);
    });
  }

  render() {
    console.log(' === Props >>>>', this.props);
    const { inputs, modal } = this.state;
    // -- mock brands
    const brands = [
      {
        id: 1,
        name: 'VW',
      },
      {
        id: 2,
        name: 'Chevrolet',
      },
      {
        id: 3,
        name: 'FIAT',
      },
      {
        id: 4,
        name: 'Ford',
      },
      {
        id: 5,
        name: 'Nissan',
      },
      {
        id: 6,
        name: 'Mitsubishi',
      },
    ];

    let activeSave = false;
    if (
      inputs.title.length > 0 && (
        inputs.brand.length > 0
      || inputs.model.length > 0
      || inputs.year > 0
      || inputs.color.length > 0
      || inputs.km > 0
      || inputs.price > 0
      )
    ) {
      activeSave = true;
    }

    return (
      <>
        <ModalInfo active={modal.active} sucess={modal.success} mensagem={modal.mensagem} />
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
                    <select
                      name="marca"
                      onChange={(event: React.FormEvent<HTMLSelectElement>) => {
                        const { value } = event.currentTarget;
                        this.setState((prevState) => ({
                          inputs: {
                            ...prevState.inputs,
                            brand: value,
                          },
                        }));
                      }}
                      value={inputs.brand}
                    >
                      <option value="" disabled selected>Selecione a marca</option>
                      {brands.map((brand) => (
                        <option value={brand.name}>{brand.name}</option>
                      ))}
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
                      value={inputs.price > 0 ? inputs.price : ''}
                    />
                  </div>
                  <div className="field" />
                </div>
                <div className="line">
                  <div className="field">
                    {inputs.id ? (
                      <button type="button" className="btnAction" onClick={() => this.removeCar()}>
                        Remover
                      </button>
                    ) : <></>}
                    <Link to="/">
                      <button type="button" className="btnAction">
                        Cancelar
                      </button>
                    </Link>
                  </div>
                  <div className="field flexEnd">
                    {activeSave ? (
                      <button type="button" className="btnAction inverter" onClick={() => this.save()}>
                        Salvar
                      </button>
                    ) : <></>}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  car: state.car.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
