/**
 * Componente que va a contener un formulario para 
 * autenticación de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {
    const initialCredencials = [
        {
            user:'',
            password:''
        }
    ];
    const [credencials, setCredencials] = useState(initialCredencials);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
