import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import Cadastro from './components/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App;