import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function sum(a,b){
  return a + b;
}

function alerta(a,b){
  alert(sum(a,b));
}

function primeiroJSX() {
    return (<div>
      Willian K. - Introdução ao ReactJs
      <h1 className='teste'>Soma: {sum(10,30)}</h1>
    </div>);
}

const App = () => {
  return (<div className='App'>
    Hello World
    <br/>
    {primeiroJSX()}
    <Button onClick={() => alerta(100,100)} name="Solta Alerta !"></Button>
    <ComponentA>
      <ComponentB>
        <Button onClick={() => alerta(20,50)} name="Solta Alerta Segundo !"></Button>
      </ComponentB>
    </ComponentA>
    <Lifecycle></Lifecycle>
    </div>);
};

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
