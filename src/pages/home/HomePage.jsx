import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('We are in Route:', location.pathname);

    const navigatePath = (path) => {
        navigate(path);
    }
    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true',
            
        }, {
            state: {
                online: true
            }
        });
    }
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigateProps('/online-state')}>Go to Page with State / Query Params </button>
            <button onClick={() => navigatePath('/profile')}>Go to Profile</button>
        </div>
    );
}

export default HomePage;
