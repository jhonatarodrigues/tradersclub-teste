// -- action types

// eslint-disable-next-line no-shadow
export enum CarTypes {
  'LOAD_REQUEST' = '@car/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@car/LOAD_SUCCESS',
  'LOAD_ERROR' = '@car/LOAD_ERROR',

  'LOAD_REQUEST_FILTERED' = '@car/LOAD_REQUEST_FILTERED',
  'LOAD_SUCCESS_FILTERE' = '@car/LOAD_SUCCESS_FILTERE',
  'LOAD_ERROR_FILTERED' = '@car/LOAD_ERROR_FILTERED',
}

// -- data types
export interface Car {
  id: number,
  title: string,
  model: string,
  brand: string,
  year: number,
  color: string,
  km: number,
  price: number,
}

// -- state Type
export interface CarsState {
  readonly data: Car[],
  readonly filtered: Car[],
  readonly loading: boolean,
  readonly error: boolean,
}
