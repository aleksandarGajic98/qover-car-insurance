import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import WithLayout from '../../components/shared/layout/WithLayout';
import ToggleSwitch from '../../components/shared/inputs/toggleSwitch/ToggleSwitch';
import { InsuranceOfferCard } from '../../components/insuranceOfferCard/InsuranceOfferCard';
import {
	filterChanged,
	selectFilter,
	selectSelectedOffer,
	selectToken,
	selectVisibleOffers,
} from '../../store/reducers';

import styles from './InsuranceOffers.module.scss';

const InsuranceOffers = () => {
	const dispatch = useAppDispatch();
	const selectedOffer = useAppSelector(selectSelectedOffer);
	const stateFilter = useAppSelector(selectFilter);
	const insuranceOffers = useAppSelector(selectVisibleOffers);
	const [isRightSelected, setIsRightSelected] = useState(stateFilter === 'yearly');
	const token = useAppSelector(selectToken);

	if (!token) {
		return <Navigate to="/" />;
	}

	const getFilterValueFor = (value: boolean) => (value ? 'yearly' : 'monthly');

	const handleChange = (value: boolean) => {
		dispatch(filterChanged(getFilterValueFor(value)));
		setIsRightSelected(value);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Select a plan</div>
			<div className={styles.filters}>
				<div
					className={`${styles.plan} ${isRightSelected ? '' : styles.selected}`}
				>
					PAY MONTHLY
				</div>
				<ToggleSwitch onChange={handleChange} initialValue={stateFilter === 'yearly'}/>
				<div
					className={`${styles.plan} ${isRightSelected ? styles.selected : ''}`}
				>
					PAY YEARLY
				</div>
			</div>
			<div className={styles.offers}>
				{insuranceOffers.map(offer => (
					<InsuranceOfferCard
						key={offer.type}
						offer={offer}
						isSelected={() => offer.type === selectedOffer?.type}
					/>
				))}
			</div>
			<div className={styles.link}>
				<a href="https://www.qover.com">Show me the full comparison table</a>
				<div className={styles.icon} />
			</div>
		</div>
	);
};

export default WithLayout(InsuranceOffers);
