import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
// import './App.css';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TasksDetailPage';


function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/una404'>Not Existing Route</Link>
          {/* <Link to='/about'>About</Link> */}
        </aside>
        <main>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/task/:id' element={<TasksDetailPage />} />
            {/* 404  Page no Found */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
