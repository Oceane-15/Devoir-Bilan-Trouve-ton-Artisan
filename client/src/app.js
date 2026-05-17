import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Erreur from './pages/erreur';
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;