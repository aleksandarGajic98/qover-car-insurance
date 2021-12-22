import { get, post } from '../utils/api';

export const login = (body: {
	email: string;
	password: string;
	keepMeLoggedIn: boolean;
}) => post<{ token: string }>('auth', body);

export const validateToken = (token: string) =>
	get<{ isValid: boolean }>('auth/validate', {
		Authorization: `Bearer ${token}`,
	});
