import React, { Component } from 'react';
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
  car: Car[]
}
interface DispatchProps {
  loadRequest(): void,
}

type Props = StateProps & DispatchProps;

class DetailsPage extends Component<Props> {
  componentDidMount() {
    // const { loadRequest } = this.props;

    // loadRequest();
  }

  render() {
    const { car } = this.props;

    return (
      <div className="container">
        <LeftBar />
        <div className="containerRight">
          <SearchBar />
          <div className="containerResults">
            aaaaa

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
