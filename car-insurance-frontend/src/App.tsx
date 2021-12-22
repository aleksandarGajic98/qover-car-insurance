import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { validateToken } from './api';
import { InsuranceOffersPage, LoginPage, PricePage } from './pages';
import { useAppDispatch, useAppSelector } from './store';
import { selectToken, setToken } from './store/reducers';
import { decodeToken } from 'react-jwt';

const App = () => {
	const token = useAppSelector(selectToken);
	const dispatch = useAppDispatch();

	const invalidateToken = () => dispatch(setToken(''));

	const scheduleInvalidateToken = () => {
		const decoded = decodeToken(token!);

		if(!decoded) return;
		setTimeout(() => {
			invalidateToken();
		}, (decoded as any).exp * 1000);
	}

	useEffect(() => {
		if (!token) return;
		validateToken(token)
		.then(() => {
			const decoded = decodeToken(token!);

		console.log('decoded', decoded);
			scheduleInvalidateToken();
		})
		.catch(({ statusCode }: { statusCode: number }) => {
			if (statusCode === 401) {
				invalidateToken();
			}
		});
	}, []);

	return (
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/price" element={<PricePage />} />
			<Route path="/insurance" element={<InsuranceOffersPage />} />
		</Routes>
	);
};

export default App;
