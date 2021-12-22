import React from 'react';
import { InputProps } from '../../../../utils/types';
import { CheckBoxType } from './types';

const CheckBox = ({
	classNames,
	customStyles,
	errorMessage,
	label,
	name,
	onBlur,
	setValue,
	value,
}: InputProps<boolean> & CheckBoxType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked);
	};

	const {
		container,
		input,
		labelStyles,
		error,
		wrapper,
	} = customStyles || {};

	return (
		<div className={`${classNames?.join(' ')} ${container?.join(' ')}`}>
			<div className={wrapper?.join(' ')}>
				<input
					type="checkbox"
					onBlur={onBlur}
					name={name}
					onChange={handleChange}
					checked={value}
					className={input?.join(' ')}
				/>
				<label className={labelStyles?.join(' ')} htmlFor={name}>
					{label}
				</label>
			</div>
			{errorMessage && <span className={error?.join(' ')}>{errorMessage}</span>}
		</div>
	);
};
export default CheckBox;
