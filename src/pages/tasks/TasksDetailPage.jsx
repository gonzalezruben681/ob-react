import React from 'react';
import { useParams } from 'react-router-dom';

const TasksDetailPage = ({task}) => {
    const {id} = useParams();
    let taskID = id - 1; 
    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{task[taskID].name}</h2>
            <h3>{task[taskID].description}</h3>
        </div>
    );
}

export default TasksDetailPage;
