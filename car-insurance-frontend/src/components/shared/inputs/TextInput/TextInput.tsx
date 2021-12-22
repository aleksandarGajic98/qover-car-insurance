import React from 'react';
import { InputProps } from '../../../../utils/types';
import { TextInputType } from './types';

const TextInput = ({
	classNames,
	customStyles,
	errorMessage,
	label,
	name,
	onBlur,
	setValue,
	type,
	value,
}: InputProps<string> & TextInputType) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const {
		container,
		input,
		label: labelStyles,
		error,
		wrapper,
	} = customStyles || {};

	return (
		<div className={`${classNames?.join(' ')} ${container?.join(' ')}`}>
			<div className={wrapper?.join(' ')}>
				<label className={labelStyles?.join(' ')} htmlFor={name}>
					{label}
				</label>
				<input
					type={type || 'text'}
					onBlur={onBlur}
					name={name}
					value={value}
					onChange={handleChange}
					className={input?.join(' ')}
				/>
			</div>
			<span className={error?.join(' ')}>{errorMessage}</span>
		</div>
	);
};
export default TextInput;
