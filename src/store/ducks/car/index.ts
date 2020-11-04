import { Reducer } from 'redux';
import { CarsState, CarTypes } from './types';

const INITIAL_SATATE: CarsState = {
  data: [
    {
      id: 1,
      name: 'teste de info',
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<CarsState> = (state = INITIAL_SATATE, action) => {
  switch (action.type) {
    case CarTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CarTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case CarTypes.LOAD_ERROR:
      return {
        ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
