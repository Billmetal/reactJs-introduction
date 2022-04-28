import React from "react";

function Button(props){
    const {name, onClick} = props;
    return (<button onClick={onClick}>{name}</button>);
}

const ButtonDel = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
);

export {Button,ButtonDel};