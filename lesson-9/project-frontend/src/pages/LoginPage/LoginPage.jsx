import { useDispatch } from "react-redux";

import LoginForm from "../../modules/LoginForm/LoginForm";

import { signin } from "../../redux/auth/auth-operations";

const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (data)=> {
        dispatch(signin(data));
    }

    return (
        <div className="container">
            <h1 className="page-title">Login page</h1>
            <LoginForm onSubmit={onLogin} />
        </div>
    )
}

export default LoginPage;