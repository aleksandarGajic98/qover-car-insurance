import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { Car } from '../types';

interface CarState {
	cars: Car[]
	isLoading: boolean;
}

const initialState: CarState = {
    cars: [],
    isLoading: true,
};

export const carSlice = createSlice({
	name: 'car',
	initialState,
	reducers: {
		setCars: (state, { payload }: PayloadAction<Car[]>) => {
            state.cars = payload;
            state.isLoading = false;
        },
	},
});

export const { setCars } = carSlice.actions;

export const selectCars = (state: RootState) => state.car.cars;
export const selectIsLoading = (state: RootState) => state.car.isLoading;

export const carReducer = carSlice.reducer;
