import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
// import './App.css';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/Dashboard';

function AppRoutingFinal() {
  // TODO: change to value from sessionStorage (or something dinamic)

  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/' element={loggedIn ? (<Navigate from='/' to='/dashboard' />) : (<Navigate from='/' to='/login' />)} />
        {/* Login Route */}
        <Route exact path='/login' element={<LoginPage />} />
        {/* Dashboard Route */}
        <Route exact path='/dashboard' element={loggedIn ? (<DashboardPage />) : (<Navigate from='/' to='/login' />)} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
