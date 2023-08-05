import { useNavigate } from "react-router-dom";

import RegisterForm from "../../modules/RegisterForm/RegisterForm";

import { signup } from "../../shared/api/auth";

const RegisterPage = () => {
    const navigate = useNavigate();

    const onSignup = async(data)=> {
        try {
            await signup(data);
            navigate("/login")
        }
        catch(error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <h1 className="page-title">Register page</h1>
            <RegisterForm onSubmit={onSignup} />
        </div>
    )
}

export default RegisterPage;