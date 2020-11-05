import { action } from 'typesafe-actions';
import { CarTypes, Car } from './types';

export const loadSuccess = (data: Car[]) => action(CarTypes.LOAD_SUCCESS, { data });
export const loadRequest = () => action(CarTypes.LOAD_REQUEST);
export const loadError = () => action(CarTypes.LOAD_ERROR);

export const loadSuccessFiltered = (data: Car[]) => action(CarTypes.LOAD_SUCCESS_FILTERE, { data });
export const loadRequestFiltered = () => action(CarTypes.LOAD_REQUEST_FILTERED);
export const loadErrorFiltered = () => action(CarTypes.LOAD_ERROR_FILTERED);
