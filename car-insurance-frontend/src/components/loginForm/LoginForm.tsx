import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getFormByName, useCompositeForm } from '../../utils/formHooks';
import FormGroup from '../shared/form/FormGroup';
import initialState from './initialState';
import styles from './LoginForm.module.scss';
import {
	setToken,
	setError,
	selectErrorMessage,
	selectToken,
} from '../../store/reducers/authReducer';
import { login } from '../../api';
import '../../index.css';
import { useAppDispatch, useAppSelector } from '../../store';

const Login = () => {
	const [forms, isValid, validate] = useCompositeForm(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const errorMessage = useAppSelector(selectErrorMessage);
	const authToken = useAppSelector(selectToken);
	const dispatch = useAppDispatch();

	if (authToken) {
		return <Navigate to="/price" />;
	}


	const submit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		validate();
		if (!isValid()) return;

		const email = getFormByName(forms, 'email')?.value;
		const password = getFormByName(forms, 'password')?.value;
		const keepMeLoggedIn = getFormByName(forms, 'keepMeLoggedIn')?.value;
		setIsLoading(true);
		login({ email, password, keepMeLoggedIn })
			.then(({ token }) => {
				setIsLoading(false)
				dispatch(setToken(token));
			})
			.catch((error: { message: string[] }) => {
				setIsLoading(false)
				dispatch(setError(error.message[0]));
			})
	};

	return (
		<>
			<form className={styles.form}>
				<span className={styles.title}>Welcome at Qover</span>
				<FormGroup forms={forms} />
				<button
					type="submit"
					onClick={submit}
					className={styles.submit}
					disabled={isLoading}
				>
					Sign in to your account
				</button>
				{errorMessage && <span className={styles.error}>{errorMessage}</span>}
			</form>
			<button type="button" onClick={submit} className={styles.missingAccount}>
				Don&apos;t have an account?{' '}
				<span className={styles.underline}>Ask access</span>
			</button>
		</>
	);
};

export default Login;
