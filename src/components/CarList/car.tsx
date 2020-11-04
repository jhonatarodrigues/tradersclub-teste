import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Car } from '../../store/ducks/car/types';
import * as CarActions from '../../store/ducks/car/actions';

interface StateProps {
  car: Car[]
}
interface DispatchProps {
  loadRequest(): void,
}

type Props = StateProps & DispatchProps;

class CarList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { car } = this.props;

    return (
      <div>
        <ul>
          {car.map((item) => (<li>{item.name}</li>))}
        </ul>
        car component
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  car: state.car.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarList as any);
