import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
// import './App.css';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';


function AppRoutingOne() {

  let logged =  false;
  let taskList = [
    {
      id: 1,
      name:'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name:'Task 2',
      description: 'My Second Task'
    },
    {
      id: 3,
      name:'Task 3',
      description: 'My third Task'
    }
  ] 

  useEffect(() => {
    logged =  localStorage.getItem('credentials');
    console.log('User logged? ',logged)
  },[]);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/una404'>Not Existing Route</Link>
          <Link to='/task/1'>Task 1</Link>
          <Link to='/task/2'>Task 2</Link>
          <Link to='/login'>Login</Link>
          {/* <Link to='/about'>About</Link> */}
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            {/* cuando esta logged lo redirije al home */}
            <Route path='/login' element={logged ? <HomePage /> :  <LoginPage />
            } />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/online-state' element={<StatePage />} />
            {/* cuando esta no logged lo redirije al login */}
            <Route path='/profile' element={logged ? 
                <ProfilePage />
                : (<Navigate to='/login' />)
                } />
            <Route path='/tasks' element={<TasksPage />} />
            <Route  exact path='/task/:id' element={<TasksDetailPage task={taskList} /> }>
              
              </Route>
            {/* 404  Page no Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
