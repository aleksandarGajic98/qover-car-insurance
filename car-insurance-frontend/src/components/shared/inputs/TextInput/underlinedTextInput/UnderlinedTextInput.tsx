import { InputProps } from '../../../../../utils/types';
import TextInput from '../TextInput';
import { TextInputType } from '../types';
import styles from './UnderlinedTextInput.module.scss';

const UnderlinedTextInput = (
	props: Omit<InputProps<string> & TextInputType, 'classNames'>
) => <TextInput classNames={[styles.underlined]} {...props} />;

export default UnderlinedTextInput;
