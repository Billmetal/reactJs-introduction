import React from "react";

function ComponentA(props){
    return (<div>
        Component A =D
        <div>{props.children}</div>
    </div>);
}

export default ComponentA;