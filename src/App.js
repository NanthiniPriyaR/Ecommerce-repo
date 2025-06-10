import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ZyrooLandingPage />} />
                <Route path="/register" element={<ZyrooRegistrationPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;