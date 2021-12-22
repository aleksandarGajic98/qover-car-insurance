import { useDispatch } from 'react-redux';
import {
	getCoverageMessage,
	getDurationTravelMessage,
	getMedicalExpensesMessage,
	getPersonalAssistanceMessage,
} from './util';

import styles from './InsuranceOfferCard.module.scss';
import { selectedOffer } from '../../store/reducers';
import { InsuranceOffer, InsuranceOfferType } from '../../store/types';
import { InsuranceOfferPrice } from './insuranceOfferPrice';
import { InsuranceOfferTravelAssistance } from './insuranceOfferTravelAssistance';
import { InsuranceOfferBtn } from './insuranceOfferButton';
import { InsuranceOfferField } from './insuranceOfferField';

interface InputProps {
	offer: InsuranceOffer;
	isSelected: () => boolean;
}

export const InsuranceOfferCard = ({ isSelected, offer }: InputProps) => {
	const {
		type,
		price,
		coverage,
		duration,
		medicalExpenses,
		personalAssistance,
		travelAssistance,
	} = offer;
	const dispatch = useDispatch();

	const getTitleFor = (offerType: InsuranceOfferType) =>
		offerType.includes('global') ? 'Global' : 'Universe';

	const onClick = () => {
		dispatch(selectedOffer(type));
	};

	return (
		<div
			className={`${styles.wrapper} ${
				isSelected() ? styles.selected : styles.unselected
			}`}
		>
			<div className={styles.title}>{getTitleFor(type)}</div>
			<div className={styles.breaker} />
			<InsuranceOfferPrice price={price} />
			<div className={styles.breaker} />
			<InsuranceOfferField key='duration-travel' text={getDurationTravelMessage(duration)} />
			<div className={styles.breaker} />
			<InsuranceOfferField key='medical-expenses' text={getMedicalExpensesMessage(medicalExpenses)} />
			<div className={styles.breaker} />
			<InsuranceOfferField
				key='personal-assistance'
				text={getPersonalAssistanceMessage(personalAssistance)}
			/>
			<div className={styles.breaker} />
			<InsuranceOfferTravelAssistance value={travelAssistance} />
			<div className={styles.breaker} />
			<InsuranceOfferField key='coverage' text={getCoverageMessage(coverage)} />
			<div className={styles.breaker} />
			<InsuranceOfferBtn onClick={onClick} isSelected={isSelected()} />
		</div>
	);
};

export default InsuranceOfferCard;
