import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Aplication from './aplicacoes-internet/Aplication';
// import './styles.css';
import { Button, ButtonDel } from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import mock from "./mock";

function sum(a,b){
  return a + b;
}

function alerta(a,b){
  alert(sum(a,b));
}

/****** JSX  *******/

function primeiroJSX() {
    return (<div>
      Willian K. - <h1>Introdução ao ReactJs</h1>
      <h1 className='teste'>Soma: {sum(10,30)}</h1>
    </div>);
}

/****** Conditional-Renderization  *******/

const buttonA = <button>Primeiro Botão</button>
const buttonB = <button>Segundo Botão</button>

const itemBooleano = true;

const showInTrue = (
  <div>
    Botão a ser mostrado quando true
    <br/>
    {buttonA}
  </div> 
);

const showInFalse = (
  <div>
    Botão a ser mostrado quando false
    <br/>
    {buttonB}
  </div>
); 

const showOrNot = () => {
  return itemBooleano ? (<div><h1>Informação ou Componente a ser Mostrado !</h1></div>) : null; 
};

/****** Chaves e Listas  *******/

const renderCustomer = (customer,index) => {
  return (
    <div key={`customer-${customer.id}`}>
      <li>{customer.name} <ButtonDel onClick={(e) => deleteClick(e ,customer.id)}>Deletar Customer X</ButtonDel></li>
      {customer.skills.map(renderSkills)}
    </div>
  );
};

const renderSkills = (skill,index) => {
  return (
    <div style={{paddingLeft: "30px"}} key={`skill-${index}`}>
      <li>{skill}</li>
    </div>
  );
};

/****** Manipulando Eventos  *******/

const name = "Digital Innovation One";

const showEvent = (e) => {
  console.log("Evento Clicado")
  console.log(e);
  alert(name);
};

const Btn = <button onClick={showEvent}>Mostrar Evento</button>;

const handleChange = (e) => {
  const { value } = e.target;
  console.log(value);
};

const deleteClick = (e,id) => {
  console.log("Deletar Customer");
  alert(`ID do Customer para deletar = ${id}`);
};

/****** Função Principal  *******/

const App = () => {
  return (
    <div className='App'>
      Hello World
      <br/>
      {primeiroJSX()}
      <Button onClick={() => alerta(100,100)} name="Solta Alerta !"></Button>
      <ComponentA>
        <ComponentB>
          <Button onClick={() => alerta(20,50)} name="Solta Alerta Segundo !"></Button>
        </ComponentB>
      </ComponentA>
      <br/>
      <h2>==============  Ecossistemas e Lifecycle ===============</h2>
      <Lifecycle></Lifecycle>
      <br/>
      <h2>==========  Continua com Conditional-Renderization ===========</h2>
      {itemBooleano ? showInTrue : showInFalse} 
      <br/>
      {showOrNot()} 
      <br/>
      <h2>===============  Chaves e Listas ===============</h2> 
      <div>
        <ul>
          {mock.map(renderCustomer)}
        </ul>
      </div>
      <br/>
      <h2>===============  Manipulando Eventos ===============</h2>
      <input onChange={handleChange}></input>
      {Btn}
      <div style={{marginLeft: "50%",position: "absolute", top: "0"}}>
        <Aplication></Aplication>
      </div>
    </div>
  );  
};

/****** Classe para Ecossistemas e Lifecycle  *******/

class Lifecycle extends Component {

  constructor(props){
    super(props);

    this.state = {
      clock: 1000,
      copo: "Água"
    }
  }

  render() {
    const { clock, copo } = this.state;
    return (
    <div>
      <h1>{clock}</h1>
      <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
    </div>);
  }

  alterarCopo = () => {
    this.setState({
      copo: "refrigerante"
    });
  };

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: "suco"
      });
    },3000);
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);
