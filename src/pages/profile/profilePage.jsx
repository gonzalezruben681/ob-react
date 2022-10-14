import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {
    const navigate = useNavigate();

    const navigatePath = (path) => {
        navigate(path);
    }
    
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigatePath('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go to Profile</button>
        </div>
    );
}

export default ProfilePage;
