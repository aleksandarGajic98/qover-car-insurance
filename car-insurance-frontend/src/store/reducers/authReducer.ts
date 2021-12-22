import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface AuthState {
	token?: string;
	errorMessage?: string;
}

const initialState: AuthState = {
	token: undefined,
	errorMessage: undefined,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			state.errorMessage = undefined;
		},
		setError: (state, action: PayloadAction<string>) => {
			state.token = undefined;
			state.errorMessage = action.payload;
		},
	},
});

export const { setToken, setError } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage;

export const authReducer = authSlice.reducer;
