import React from 'react';
import {
    useNavigate
} from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';

const DashboardPage = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    }

    return (
        <div>
            <Button onClick={logout} variant="contained">Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashboardPage;
