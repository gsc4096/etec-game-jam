import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.js';
import ForgotPassword from './components/ForgotPassword.jsx';
import Landing from './pages/Landing.jsx';
import Home from './components/Home.jsx';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 