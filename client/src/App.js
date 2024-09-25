import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.js';
import Landing from './pages/Landing.jsx';
import Banco from './pages/Banco.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/banco" element={<Banco />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 