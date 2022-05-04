import React from 'react';
import TodoListStateful from "./TodoListStateful";
import TodoListStateless from "./TodoListStateless";
import TodoListFuncional from "./TodoListFuncional";
import NameForm from "./NameForm";
import SorveteForm from './SorveteForm';
import FileInput from "./FileInput";
import Counter from './Counter';
import { Provider } from "react-redux";
import { createStore} from 'redux';
import { reducer } from "./redux/reducers";
import { Topico1 } from './http/Topico1';

const spaces = {
    margin: "0px 30px"
}

/****** REDUX  *******/

const store = createStore (
    reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


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
            <h2>===============  Redux ===============</h2>
            <Provider store={store}>
                <Counter/>
            </Provider>
            <h2>===============  HTTP ===============</h2>
            {Topico1}
        </div>
    );
};


export default Aplication;