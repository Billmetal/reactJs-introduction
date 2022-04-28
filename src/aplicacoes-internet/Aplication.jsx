import React from 'react';
import TodoListStateful from "./TodoListStateful";
import TodoListStateless from "./TodoListStateless";
import TodoListFuncional from "./TodoListFuncional";


const Aplication = () => {
    return(
        <div>
            <h1>Desenvolvendo Aplicações para internet com ReactJS</h1>
            <h2>===============  Stateful vs Stateless ===============</h2>
            <TodoListStateful/>
            <TodoListStateless items={["1","2","3"]}/>
            <TodoListFuncional/>
        </div>
    );
};


export default Aplication;