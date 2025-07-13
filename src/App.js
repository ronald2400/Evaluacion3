import React from 'react';
import './Style.css';
import Menu from './Components/Menu';
import Historia from './Components/Historia';
import Personajes from './Components/Personajes';
import Razas from './Components/Razas';
import Clases from './Components/Clases';
import CrearPersonaje from './Components/CrearPersonaje';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Historia />
      <Personajes />
      <Razas />
      <Clases />
      <CrearPersonaje />
      <Footer />
    </div>
  );
}

export default App;