import { FormState } from '../../../utils/types';

export interface FormGroupProps {
	forms: FormState<any, any>[];
}

const FormGroup = ({ forms }: FormGroupProps) => (
	<>
		{forms.map(form => {
			const {
				label,
				name,
				component: Input,
				setValue,
				value,
				errorMessage,
				validate: inputValidation,
				...rest
			} = form;
			return (
				<Input
					key={name}
					label={label}
					name={name}
					setValue={(e: any) => {
						setValue(e);
						inputValidation();
					}}
					onBlur={inputValidation}
					value={value}
					errorMessage={errorMessage}
					{...rest}
				/>
			);
		})}
	</>
);

export default FormGroup;
