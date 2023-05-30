import { useNavigate } from 'react-router-dom';
import AuthServices from '../modules/LoginForm/services/AuthServices';

export function useAuthRedirect() {
    const navigate = useNavigate('');
    AuthServices.refresh()
    .then(() => {
    })
    .catch((err) => {
        console.log(err);
        navigate('/');
    });
}
