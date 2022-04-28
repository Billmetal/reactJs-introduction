import React, { Component } from 'react';

/****** Classe para Stateful  *******/

class TodoListStateful extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                "Tomate","Alface","Melância","Pepino","Rúcula","Quiabo"
            ]
        }
    }

    addItem = (item) => {
        this.setState({
                items: [...this.state.items,item]
            }
        );
    };

    removeItem = () => {
        this.setState({
            items: [...this.state.items.slice(1)]
        });
    };

    render() {
        const { items } = this.state;
        return (
            <div className='bloco-lista'>
                <p>Minha Lista Statefull</p>
                <ul className='lista-estilizada'>
                    {items.map(item => <li>{item}</li>)}
                </ul>
                <button onClick={() => this.addItem("Cerveja")}>Adicionar Item</button>
                <button onClick={() => this.removeItem()}>Remover Item</button>
            </div>
        );
    }
}


export default TodoListStateful;