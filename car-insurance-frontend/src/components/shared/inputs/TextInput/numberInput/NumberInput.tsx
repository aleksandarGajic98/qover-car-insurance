import { InputProps } from '../../../../../utils/types';
import TextInput from '../TextInput';
import { TextInputType } from '../types';
import styles from './NumberInput.module.scss';

const NumberInput = (
	props: Omit<InputProps<string> & TextInputType, 'classNames'>
) => <TextInput classNames={[styles.number]} {...props} type="number" />;

export default NumberInput;
