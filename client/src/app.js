import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import './index.css'

function App() {
  return(
    <div className="App">
    <Header/>
    <Home />
    <Footer/>
    </div>
    
  );
}

export default App;