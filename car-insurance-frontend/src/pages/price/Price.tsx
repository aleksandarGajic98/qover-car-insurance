import { useEffect, useState } from 'react';
import styles from './Price.module.scss';
import PriceForm from '../../components/priceForm/PriceForm';
import WithLayout from '../../components/shared/layout/WithLayout';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCars, setCars } from '../../store/reducers';
import { getAllCars } from '../../api';
import { Loader } from '../../components/shared/loader';

const PricePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const cars = useAppSelector(selectCars);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsLoading(true);
		getAllCars()
			.then(response => {
				dispatch(setCars(response));
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className={styles.background}>
				<div className={styles.mask}>
					{!isLoading && cars && (
						<PriceForm />
					)}
					{isLoading && cars.length > 0 && <Loader />}
				</div>
			</div>
		</>
	);
};

export default WithLayout(PricePage);
