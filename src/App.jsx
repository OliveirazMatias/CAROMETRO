import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import TurmasScreen from './pages/home/Turmas';

function App() {
  return (
    // <BrowserRouter>
    //   <Rotas/>
    // </BrowserRouter>
    <TurmasScreen/>
  );
}

export default App;