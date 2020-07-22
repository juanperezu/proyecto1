import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends Component{
  
  
  render(){
  const siglo=21;
  const persona={
  nombre:'Juan',
  edad:34,
 
  }
  const buscadores=['http://google.com','http://www.bing.com','http://www.yahoo.com']
  
  return (
    <div>,
    <h1>Titulo de nivel</h1>
    <p>Estamos en el siglo  {siglo}</p>
    <h3>Aceso a un objeto</h3>
    <p>{persona.nombre} tiene {persona.edad} años</p>
    <h1>Llamado a un metodos</h1>
    <p>Un valor aleatorio llamando un método</p>
    {this.retornarAleatorio()}
    <h3>Calculo inmediato</h3> 
    3+3={3+3}
    3+3={3+3}
    <br/>
    
   
    <a href={buscadores[1]}>Google</a>

    </div>
  );
}
retornarAleatorio(){
  return Math.trunc(Math.random()*10);
}



}

export default App;
