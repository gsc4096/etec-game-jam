import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Info from '../components/oq';
import Aprender from '../components/aprender';
import Step from '../components/steps';
import Footer from '../components/footer';

function HomePage() {
  return (
    <div className="landing" id='ba'>

     <Header />
     <Home />
     <Info />
    <Aprender />
    <Step />
    <Footer />

    </div>
  );
}

export default HomePage;
