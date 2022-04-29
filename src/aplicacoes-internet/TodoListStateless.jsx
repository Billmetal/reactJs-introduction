import React from 'react';

const TodoListStateless = ({items}) => (
    <div className='bloco-lista'>
        <p>Minha Lista Stateless</p>
        <ul className='lista-estilizada'>
            {items.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

export default TodoListStateless;