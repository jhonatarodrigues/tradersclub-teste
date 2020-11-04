import { Reducer } from 'redux';
import { CarsState, CarTypes } from './types';

export const INITIAL_SATATE: CarsState = {
  data: [
    {
      id: 1,
      title: 'Celta Azul 2005 Ar e Direção',
      model: 'Celta',
      brand: 'Chevrolet',
      year: 2005,
      color: 'Azul marinho',
      km: 106041,
      price: 11772.22,
    },
    {
      id: 2,
      title: 'Celta Preto 2003',
      model: 'Celta',
      brand: 'Chevrolet',
      year: 2005,
      color: 'Preta',
      km: 209022,
      price: 8762.22,
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
