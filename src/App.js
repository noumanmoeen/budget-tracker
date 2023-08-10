import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import Budgets from "./pages/Budgets";
import Details from "./pages/Details";
import Account from "./pages/Account";
import Header from "./components/Header";
import BudgetDetails from "./pages/BudgetDetails";

function App() {
  return (
    <>
      <Router>
      <Header />

        <div>
          <Routes>
            <Route
              path="/"
              element={
                   <Home />
               }
            />
             <Route
              path="/budgets"
              element={
                <ProtectedRoute>
                  <Budgets />
                </ProtectedRoute>
              }
            />
             <Route
              path="/details"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
             <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/budget"
              element={
                <ProtectedRoute>
                  <BudgetDetails />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
