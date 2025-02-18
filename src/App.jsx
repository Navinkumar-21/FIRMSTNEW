import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import Dashboard from "./components/Dashboard";
import UserDetailPage from "./components/UserDetailPage";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the token exists and is valid
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Invalid token:", error);
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []); // Initial check when App loads

  return (
    <div>
      <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}

        />
                <Route path="/user-detail/:userEmail" element={<UserDetailPage />} /> {/* Route for UserDetailPage */}

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
        />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
