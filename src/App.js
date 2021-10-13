import './App.css';
import Consumo from './Componentes/Consumo';
import React,{useState} from 'react';
import Detalle from './Componentes/Detalle';
import {LoginProvider} from './LoginContext';
import Formulario from './Componentes/Formulario';

function App() {

 

  return (
  <LoginProvider>
  <div className="App">    
      <Detalle/>
      <Formulario/>
      {/* <Consumo/> */}
  </div>
  </LoginProvider>
  );
}

export default App;
