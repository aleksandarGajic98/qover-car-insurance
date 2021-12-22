import { InputProps } from '../../../../../utils/types';
import CheckBox from '../CheckBox';
import { CheckBoxType } from '../types';
import styles from './TickCheckBox.module.scss';

const TickCheckBox = (
	props: Omit<InputProps<boolean> & CheckBoxType, 'classNames'>
) => <CheckBox classNames={[styles.ticked]} {...props} />;

export default TickCheckBox;
