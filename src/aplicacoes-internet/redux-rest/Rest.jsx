import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Topico3 from './Topico3';

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
));

const Rest = () => {
    return (
        <div>
            <Provider store={store}>
                <Topico3/>
            </Provider>
        </div>
    );
};

export default Rest;
