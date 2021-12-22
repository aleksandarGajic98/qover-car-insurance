import styles from './InsuranceOfferPrice.module.scss';

interface InputProps {
	price: number;
}

const InsuranceOfferPrice = ({ price }: InputProps) => (
	<div className={styles.wrapper}>
		<div className={styles.money}>
			<span className={styles.price}>{price}</span>
			<span className={styles.currency}>€</span>
		</div>
		<span className={styles.subtitle}>YEARLY INCL. TAXES</span>
	</div>
);

export default InsuranceOfferPrice;
