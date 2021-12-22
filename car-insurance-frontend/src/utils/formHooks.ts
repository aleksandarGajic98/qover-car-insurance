import { useState } from 'react';
import { useDidMountEffect } from './customHooks';
import {
	CompositeFormState,
	FormState,
	InputProps,
	UseFormProps,
} from './types';

export const useForm = <T, P extends InputProps<T>>({
	component,
	errorMessageText,
	initialValue,
	label,
	name,
	validator,
	...rest
}: UseFormProps<T, P>): FormState<T, P> => {
	const [value, setValue] = useState(initialValue);
	const [errorMessage, setErrorMessage] = useState('');
	const [triggerValidation, setTriggerValidation] = useState(false);
	const [additionalProps, setAdditionalProps] = useState(rest);

	useDidMountEffect(() => {
		setErrorMessage(!validator(value) ? errorMessageText : '');
	}, [triggerValidation]);

	const validate = () => setTriggerValidation(!triggerValidation);

	const isValid = () => validator(value);

	const handleAdditionalPropsChange = (vars: typeof additionalProps) => {
		setAdditionalProps({ ...additionalProps, ...vars });
	};

	return {
		component,
		errorMessage,
		isValid,
		label,
		name,
		setAdditionalProps: handleAdditionalPropsChange,
		setErrorMessage,
		setValue,
		validate,
		value,
		...additionalProps,
	};
};

export const useCompositeForm = (
	initialState: UseFormProps<any, any>[]
): CompositeFormState<any, any> => {
	const forms = initialState.map(useForm);

	const isValid = () => !forms.find(form => !form.isValid());

	const validate = () => forms.forEach(form => form.validate());

	return [forms, isValid, validate];
};

export const getFormByName = <T, P extends InputProps<T>>(
	forms: FormState<T, P>[],
	name: string
) => forms?.find(form => form?.name === name);
