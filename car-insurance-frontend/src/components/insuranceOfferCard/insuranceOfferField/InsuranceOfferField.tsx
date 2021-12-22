import React from 'react';
import { InputProps } from './types';

import styles from './InsuranceOfferField.module.scss';

const InsuranceOfferField = ({ text }: InputProps) => {
	const getBoldText = (message: string) => (
		<span key={message} className={styles.bold}>{`${message} `}</span>
	);
	const getNormalText = (message: string) => (
		<span key={message}>{`${message} `}</span>
	);

	const getText = React.useMemo(
		() =>
			text.map(({ isBold, value }) =>
				isBold ? getBoldText(value) : getNormalText(value)
			),
		[text]
	);

	return <div className={styles.text}>{getText}</div>;
};

export default InsuranceOfferField;
