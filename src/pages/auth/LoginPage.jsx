import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import {
    Link,
} from 'react-router-dom';

const LoginPage = () => {
    
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Link to="/registro">Registrarse</Link>
        </div>
    );
}

export default LoginPage;
