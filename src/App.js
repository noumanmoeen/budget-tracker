import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ProtectedRoute } from './utils/ProtectedRoute';
import Budgets from './pages/Budgets';
import Details from './pages/Details';
import Header from './components/Header';
import BudgetDetails from './pages/BudgetDetails';
import Profile from './pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserLoggedInStatus,
  setLoggedInStatus,
} from './features/users/UserSlice';
import { PublicRoute } from './utils/PublicRoute';

function App() {
  const loggedIn = useSelector(getUserLoggedInStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedInStatus());
  }, []);

  return (
    <>
      <Router>
        {loggedIn && <Header />}
        <div>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path='/budgets'
              element={
                <ProtectedRoute>
                  <Budgets />
                </ProtectedRoute>
              }
            />
            <Route
              path='/details'
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/budget/:id'
              element={
                <ProtectedRoute>
                  <BudgetDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path='/register'
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
