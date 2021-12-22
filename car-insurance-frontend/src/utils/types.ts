import React from 'react';

export type ValidatorFunction<T> = (value: T) => boolean;

export interface InputProps<T> {
	label?: string;
	name?: string;
	value?: T;
	setValue: (value: T) => void;
	errorMessage?: string;
	onBlur: () => void;
}

export interface UseFormProps<T, P extends InputProps<T>> {
	validator: ValidatorFunction<T>;
	errorMessageText: string;
	name: string;
	label: string;
	component: React.FC<P>;
	initialValue: T;
}

export type FormState<T, P extends InputProps<T>> = {
	component: React.FC<P>;
	errorMessage: string;
	isValid: () => boolean;
	label: string;
	name: string;
	setAdditionalProps: (vars: any) => void;
	setErrorMessage: (value: string) => void;
	setValue: (value: T) => void;
	validate: () => void;
	value?: T;
};

export type CompositeFormState<T, P extends InputProps<T>> = [
	FormState<T, P>[],
	() => boolean,
	() => void
];
