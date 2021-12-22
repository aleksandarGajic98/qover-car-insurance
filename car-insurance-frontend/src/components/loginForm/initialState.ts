import { isRequired } from '../../utils/validations';
import TickCheckBox from '../shared/inputs/CheckBox/tickCheckBox/TickCheckBox';
import UnderlinedTextInput from '../shared/inputs/TextInput/underlinedTextInput/UnderlinedTextInput';

export default [
	{
		name: 'email',
		label: 'Email',
		validator: isRequired,
		errorMessageText: 'Email is required',
		component: UnderlinedTextInput,
		initialValue: '',
	},
	{
		name: 'password',
		label: 'Password',
		validator: isRequired,
		errorMessageText: 'Password is required',
		component: UnderlinedTextInput,
		initialValue: '',
		type: 'password',
	},
	{
		name: 'keepMeLoggedIn',
		label: 'Remember me',
		validator: () => true,
		errorMessageText: '',
		component: TickCheckBox,
		initialValue: false,
	},
];
