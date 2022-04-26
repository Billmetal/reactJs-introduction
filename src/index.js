import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function sum(a,b){
  return a + b;
}

function alerta(a,b){
  alert(sum(a,b));
}

/****** JSX  *******/

function primeiroJSX() {
    return (<div>
      Willian K. - Introdução ao ReactJs
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

const listCustomer = [
  {
    id: 1,
    name: "Bruno Carneiro",
    skills: ["React","Node","CSS","WebPack"]
  },
  {
    id: 2,
    name: "Aline Vasconcelos",
    skills: ["HTML","Javascript","CSS","VueJs"]
  },
  {
    id: 3,
    name: "Fulano de Tal",
    skills: ["Java","Spring Boot","Android","Angular"]
  },{
    id: 4,
    name: "José Ciclano",
    skills: ["C#","Java","Javascript","Python"]
  }
];

const renderCustomer = (customer,index) => {
  return (
    <div key={`customer-${customer.id}`}>
      <li>{customer.name}</li>
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
      <h2>===========  Ecossistemas e Lifecycle ===============</h2>
      <Lifecycle></Lifecycle>
      <br/>
      <h2>===========  Continua com Conditional-Renderization ===============</h2>
      {itemBooleano ? showInTrue : showInFalse} 
      <br/>
      {showOrNot()} 
      <br/>
      <h2>===========  Chaves e Listas ===============</h2> 
      <div>
        <ul>
          {listCustomer.map(renderCustomer)}
        </ul>
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
