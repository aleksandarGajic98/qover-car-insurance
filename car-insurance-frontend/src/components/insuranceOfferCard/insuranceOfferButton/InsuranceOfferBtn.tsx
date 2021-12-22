import styles from './InsuranceOfferBtn.module.scss';

interface InputProps {
	isSelected: boolean;
	onClick: () => void;
}

const InsuranceOfferBtn = ({ isSelected, onClick }: InputProps) => {
	const getMessage = (isOfferSelected: boolean) =>
		isOfferSelected ? 'Plan selected' : 'Choose this plan';
	const getSelectedIcon = (isOfferSelected: boolean) =>
		isOfferSelected ? (
			<div className={styles.icon} />
		) : null;

	return (
		<button
			type="button"
			onClick={() => onClick()}
			className={`${styles.button} ${isSelected ? styles.selected : styles.unselected}`}
		>
			{getSelectedIcon(isSelected)}
			{getMessage(isSelected)}
		</button>
	);
};

export default InsuranceOfferBtn;
