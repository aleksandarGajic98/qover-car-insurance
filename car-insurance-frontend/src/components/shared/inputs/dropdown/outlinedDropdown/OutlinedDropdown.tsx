import { InputProps } from '../../../../../utils/types';
import Dropdown from '../Dropdown';
import { DropDownData } from '../types';
import styles from './OutlinedDropdown.module.scss';

const OutlinedDropdown = (
	props: Omit<InputProps<string> & DropDownData, 'classNames'>
) => <Dropdown classNames={[styles.outlined]} {...props} />;

export default OutlinedDropdown;
