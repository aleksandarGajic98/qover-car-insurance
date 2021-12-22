import styles from './InsuranceOfferTravelAssistance.module.scss';

interface InputProps {
	value: number;
}

const InsuranceOfferTravelAssistance = ({ value }: InputProps) => (
	<div className={styles.assistance}>
		<div>
			<span className={styles.bold}>Travel assistance abroad </span>
			<span>up to </span>
			<span className={styles.bold}>{value}</span>
		</div>
		<span>per insured per travel</span>
	</div>
);

export default InsuranceOfferTravelAssistance;
