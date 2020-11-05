import { Reducer } from 'redux';
import { CarsState, CarTypes } from './types';

export const INITIAL_SATATE: CarsState = {
  data: [
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
    {
      id: 3,
      title: 'Gol Preto 2005',
      model: 'Gol G3',
      brand: 'VW',
      year: 2005,
      color: 'Preta',
      km: 190000,
      price: 11500.00,
    },
    {
      id: 4,
      title: 'Palio Prata 2010',
      model: 'Palio Weekend',
      brand: 'FIAT',
      year: 2010,
      color: 'Prata',
      km: 99001,
      price: 25300.99,
    },
  ],
  filtered: [],
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

    case CarTypes.LOAD_REQUEST_FILTERED:
      return { ...state, loading: true };
    case CarTypes.LOAD_SUCCESS_FILTERE:
      return {
        ...state, loading: false, error: false, filtered: action.payload.data,
      };
    case CarTypes.LOAD_ERROR_FILTERED:
      return {
        ...state, loading: false, error: true, filtered: [],
      };
    default:
      return state;
  }
};

export default reducer;
