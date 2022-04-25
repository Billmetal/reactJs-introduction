import React from "react";

function ComponentB(props){
    return (<div>
        Component B =D
        <div>{props.children}</div>
    </div>);
}

export default ComponentB;