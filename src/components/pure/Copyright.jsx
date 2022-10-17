import React from 'react';
// Materia UI Components
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <div>
            <Typography variant="body2" color="GrayText" align="center">
                {'Copyright (c)'}
                <Link color="inherit" href='https://imaginaformacion.com'>Imagina Formación </Link>
                {''}
                {new Date().getFullYear()}
            </Typography>
        </div>
    );
}

export default Copyright;
