import { action } from 'typesafe-actions';
import { CarTypes, Car } from './types';

export const loadSuccess = (data: Car[]) => action(CarTypes.LOAD_SUCCESS, { data });
export const loadRequest = () => action(CarTypes.LOAD_REQUEST);
export const loadError = () => action(CarTypes.LOAD_ERROR);
