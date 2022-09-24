import React from 'react';
import ReactDOM from 'react-dom';

const nome ="Professor Flavio, obrigado por compartilhar o seu conhecimento.";

const estilo= { color : "red", fontSize:"30px"}


ReactDOM.render(
  <div>
  <h1 style= {estilo}>Meu Primeiro Deploy</h1>
  <p> {nome}</p>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTMGM0tRbogePvYK289qaLQhrmpQxh2EvsISZ4M-h2Q&s'/>
  </div> ,

  document.getElementById('root')
 
  );


