import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import ArtisansList from './pages/artisansList';
import ArtisanFiche from './pages/artisanFiche';
import Erreur from './pages/erreur';
import './index.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/artisans" element={<ArtisansList artisans={[]}/>}/>
          <Route path="/artisan" element={<ArtisanFiche/>} />
          <Route path="*" element={<Erreur/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;