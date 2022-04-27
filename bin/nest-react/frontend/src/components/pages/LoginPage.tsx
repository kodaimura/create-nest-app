import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

import Header from '../layouts/Header';
import LoginForm from '../forms/LoginForm';


const LoginPage = () => {
	const navigate = useNavigate();


	return (
		<>
		<Header
			rightContent={
				<Button 
					onClick={() => navigate('/signup')}
				>SIGNUP</Button>}
		/>
		<LoginForm />
		</>
	)
}

export default LoginPage;