import React from 'react';
import TodoListStateful from "./TodoListStateful";
import TodoListStateless from "./TodoListStateless";
import TodoListFuncional from "./TodoListFuncional";
import NameForm from "./NameForm";
import SorveteForm from './SorveteForm';
import FileInput from "./FileInput";

const spaces = {
    margin: "0px 30px"
}

const ButtonsForm = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <button style={spaces} onClick={() => null}>Form 1</button><button style={spaces} onClick={() => null}>Form 2</button><button style={spaces} onClick={() => null}>Form 3</button>
        </div>
    );
};


const Aplication = () => {
    return(
        <div>
            <h1>Desenvolvendo Aplicações para internet com ReactJS</h1>
            <h2>===============  Stateful vs Stateless ===============</h2>
            <TodoListStateful/>
            <TodoListStateless items={["1","2","3"]}/>
            <TodoListFuncional/>
            <h2>===============  Formulários ===============</h2>
            <NameForm/>
            <SorveteForm/>
            <br/>
            <FileInput/>
        </div>
    );
};


export default Aplication;