// -- action types

// eslint-disable-next-line no-shadow
export enum CarTypes {
  'LOAD_REQUEST' = '@car/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@car/LOAD_SUCCESS',
  'LOAD_ERROR' = '@car/LOAD_ERROR',
}

// -- data types
export interface Car {
  id: number,
  name: string,
}

// -- state Type
export interface CarsState {
  readonly data: Car[],
  readonly loading: boolean,
  readonly error: boolean,
}
