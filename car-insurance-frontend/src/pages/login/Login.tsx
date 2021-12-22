import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import WithLayout from '../../components/shared/layout/WithLayout';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import { selectToken } from '../../store/reducers/authReducer';
import { useAppSelector } from '../../store';
import styles from './Login.module.scss';

const Login = () => {
	const authToken = useAppSelector(selectToken);

	if (authToken) {
		return <Navigate to="/price" />;
	}

	return (
		<div className={styles.mask}>
			<div className={styles.logoWrapper}>
				<Logo />
			</div>
			<LoginForm />
		</div>
	);
};

export default WithLayout(Login);
